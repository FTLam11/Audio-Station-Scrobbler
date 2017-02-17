# Put this file in /usr/local/etc/rc.d

case "$1" in
  stop)
    echo "Shutting down Audio Station Scrobbler..."
    ;;
  start)
    echo "Booting up Audio Station Scrobbler..."
    exec /usr/local/bin/node /volume1/zCode/Audio-Station-Scrobbler/bin/server.js
    ;;
  restart)
    $0 stop
    sleep 3
    $0 start
    ;;
esac