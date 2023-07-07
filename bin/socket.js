const Socketio = require('socket.io');


module.exports = function(server){
    console.log('소켓 로그: ', Socketio);

    /* Logic */

    // 첫번째 파라미터: 서버 인스턴스
    // 두번째 파라미터: 옵션(주소, 사용할 메소드 등을 설정)
    const io = Socketio(server, {
        path: '/socket.io',
        cors: {
            origin: '*',
            methods:['GET', 'POST', 'DELETE'] 
        }
    });

    io.on('connection', function(socket){

        // socket.emit(ID, TEXT)
    });

    /* Logic */

}