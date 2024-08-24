def solution(n,pa,pb,pc):
    res = []
    for i in range(n):
        arr = [pa[i],pb[i],pc[i]]
        arr.sort()
        res.append(arr)
    res.sort()
    cnt = 0         
    for i in range(n-1,0,-1):
        if res[i][-1] > res[i-1][0] and res[i][-2] > res[i-1][1]:
            cnt += i
    return cnt
           
if __name__=="__main__":
    a = list(map(int,input().split()))
    n = len(a)
    print((n*(n+1))//2 - sum(a))

d = {"a":3,"b":4}

print(d)
d["a"] = d["a"] ^ d["b"]
d["b"] = d["a"] ^ d["b"]
d["a"] = d["a"] ^ d["b"]
print(d)