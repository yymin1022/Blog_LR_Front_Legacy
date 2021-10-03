### BOJ 10951. A + B - 4

[문제 바로가기](https://boj.kr/10951)

```Python
while(True):
    try:
        inputNum = input()
        print(int(inputNum.split(" ")[0]) + int(inputNum.split(" ")[1]))
    except:
        break
```