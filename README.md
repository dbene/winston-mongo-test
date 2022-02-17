# Test of winston-mongo
After the script itself is finished the node process is still open. Running it with `wtfnode` and canceling it after some time gives the following output:

```
> wtfnode index.js

{"level":"info","message":"Hello World!","service":"user-service"}
^C[WTF Node?] open handles:
- File descriptors: (note: stdio always exists)
  - fd 1 (tty) (stdio)
  - fd 2 (tty) (stdio)
- Sockets:
  - 192.168.128.2:59054 -> 192.168.128.2:27017
  - 192.168.128.2:59056 -> 192.168.128.2:27017
  - 192.168.128.2:59058 -> 192.168.128.2:27017
- Timers:
  - (10000 ~ 10 s) (anonymous) @ /workspace/node_modules/mongodb/lib/core/sdam/monitor.js:395
```

It seems like the connection to the mongodb is still open. The log entry was successfully written to the db.
