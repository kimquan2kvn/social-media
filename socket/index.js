const io = require("socket.io")(8800, {
    cors: {
      origin: "http://localhost:3000",
    },
});

let activeUsers = [];
// tạo kết nối giữa client và server
io.on("connection",(socket)=> {
    // add new User - server lắng nghe dữ liệu từ client
    socket.on("new-user-add", (newUserId)=>{
        if(!activeUsers.some((user)=>user.userId === newUserId)) {
            activeUsers.push({ userId: newUserId, socketId: socket.id });
            console.log("New User Connected", activeUsers);
        }
        //sau khi lắng nghe dữ liệu, server phát lại dữ liệu này đến các client khác
        io.emit("get-users", activeUsers)
        
    })

    socket.on("disconnect", ()=> {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
        console.log("User Disconnected", activeUsers);
        io.emit("get-users", activeUsers)
    })
    // server lắng nghe dữ liệu từ client
    socket.on("send-message", (data)=> {
        const {receiverId} = data;
        const user = activeUsers.find((user) => user.userId === receiverId);
        console.log("Sending from socket to:", receiverId);
        console.log("Data: ", data);
        if(user) {
            io.to(user.socketId).emit("recieve-message", data)
        }
    })
})