# Predictions

## 01.js

### Trace

* (handoff tick [interval])
* (handoff timeout)
* (enqueue timeout)
* sync "sync @0ms"
* macro "timeout @0ms"
* <100ms pass>
* (enqueue tick)
* macro "tick 1 @100ms"
* <100ms pass>
* (enqueue tick)
* macro "tick 2 @200ms"
* <100ms pass>
* (enqueue tick)
* macro "tick 3 @300ms"

### Output

* sync @0ms
* timeout @0ms
* tick 1 @100ms
* tick 2 @200ms
* tick 3 @300ms

### Postmortem

Hit.

Real numbers will vary slightly per run. I intentionally left my predictions round but knew there would be variation.

## 02.js

### Trace

* (enqueue micro "A")
* (handoff macro "E")
* (enqueue macro "E")
* sync "F"
* micro "A"
* (handoff macro "B")
* (enqueue macro "B")
* (enqueue micro "D")
* micro "D"
* macro "E"
* macro "B"
* (enqueue micro "C")
* micro "C"

### Output

* F
* A
* D
* E
* B
* C

### Postmortem

Hit.

## 03.js

### Trace

* (handoff macro A [in 40ms])
* (handoff macro B [in 20ms])
* (enqueue micro C)
* sync D @0ms
* <while loop starts>
* <20ms pass>
* (enqueue macro B)
* <10ms pass>
* <while loop ends>
* micro C @30ms
* macro B @30ms
* <10ms pass>
* (enqueue macro A)
* macro A @40ms

### Output

* D @0ms
* C @30ms
* B @30ms
* A @40ms

### Postmortem

Hit.

## 04.js

### Trace

* (enqueue micro 1)
* (enqueue micro 4)
* (enqueue micro 5)
* (handoff macro 6)
* (enqueue macro 6)
* sync 7
* micro 1
* (enqueue micro 2)
* micro 4
* micro 5
* micro 2
* (enqueue micro 3)
* micro 3
* macro 6

### Output

* 7
* 1
* 4
* 5
* 2
* 3
* 6

### Postmortem

Hit.

## 05.js

### Trace

* (handoff macro var_0) // Not saying it'll print 1, this is just the i=0 iteration
* (enqueue macro var_0)
* (handoff macro var_1)
* (enqueue macro var_1)
* (handoff macro var_2)
* (enqueue macro var_2)
* (handoff macro let_0)
* (enqueue macro let_0)
* (handoff macro let_1)
* (enqueue macro let_1)
* (handoff macro let_2)
* (enqueue macro let_2)
* (enqueue micro micro)
* sync sync, undefined
* micro micro
* macro var, 3
* macro var, 3
* macro var, 3
* macro let, 0
* macro let, 1
* macro let, 2

### Output

* sync, undefined
* micro
* var, 3
* var, 3
* var, 3
* let, 0
* let, 1
* let, 2

### Postmortem

Partial miss. I was uncertain at the time if i exists outside of the scope of the for loop or not. I also thought that a comma
in a console.log statement added a comma to the output. The event-loop part was correct though.

## 06.js

### Trace

* (handoff macro later)
* (enqueue macro later)
* (enqueue micro micro)
* (handoff macro wrapped)
* (enqueue macro wrapped)
* sync NOW
* TypeError

### Output

* NOW
* TypeError

### Postmortem

Hit.
