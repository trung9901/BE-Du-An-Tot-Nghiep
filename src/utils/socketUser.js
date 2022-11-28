export let onlineUsers = []
export const addNewUser = (id, socketId,socketRole) => {
    !onlineUsers.some((user) => user.id === id) &&
      onlineUsers.push({ id, socketId,socketRole });
      console.log(onlineUsers);
  };

export const getUser = (id) => {
    return onlineUsers.find((user) => user.id === id && user.socketRole == 0);
  };

export const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
}

export const getAdmin = () => {
  return onlineUsers.find(user => user.socketRole === 2)
}

export const getEmployee = (id) =>{
  return onlineUsers.find(user => user.id === id && user.socketRole == 1)
}