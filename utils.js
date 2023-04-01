
function generateId() {
    const timestamp = Date.now().toString();
    return `User${timestamp}`;
  }


  
module.exports.generateId=generateId
