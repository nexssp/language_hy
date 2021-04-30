; Nexss PROGRAMMER 2.x - Hy
; Default template for JSON Data
(import json re platform sys)

(setv NexssStdin (sys.stdin.read ))
(setv parsedJson (json.loads NexssStdin ))
; Get values below
; (print (.get parsedJson "x"))

(assoc parsedJson "Hello from Hy! Python version:" (.python_version platform))

(setv NexssStdout (.encode (.dumps json parsedJson) "utf8" "surrogateescape"))

(print (.decode NexssStdout "utf8" "surrogateescape"))
