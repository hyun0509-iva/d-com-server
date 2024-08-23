# d-com-server
d-com 프로젝트의 백엔드 서버 

강의에서는 PostgreSQL를 사용했으나 본인은 mysql로 변경 

## 설정 
설정할 부분은 아래만 추가

```json
DATABASE_URL=디비url입력
REDIS_URL=redis://localhost:6379
COOKIE_SECRET=cookienyamnyam
```

DATABASE_URL에는 mysql url을 넣어주면되고, 나머지는 강의와 동일  