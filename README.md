# DevProfiler

웹 개발자 역량 검사

https://devprofiler.duckdns.org/

## 컨텐츠 목록

1. [사이트 이용 설명](#사이트-이용-설명)
2. [상세 기술 설명](#상세-기술-설명)
3. [프로젝트 참여](#프로젝트-참여)
4. [저작권](#저작권)
5. [연락 정보](#연락-정보)
6. [폴더 트리](#폴더-트리)

## 사이트 이용 설명

MBTI검사와 유사하게 간단한 설문조사 이후 자신의 역량에 대해 체크할 수 있고, 피드백을 받을 수 있음.<br />
비로그인 상태에서도 충분히 사이트 이용 가능하며, 로컬혹은 소셜로그인을 통해 나의 검사결과를 저장 가능.<br/>

## 프로젝트 및 기술 설명

### 프로젝트의 목표

우선 백엔드에 대한 학습이 주된 목적이기에, 규모가 크지 않은 프로젝트로 구상하였음.<br/>
그렇기 때문에 백엔드적인 기술및 목표에 대해 서술함.

- Express 환경에서도 구조 추상화를 통해 최대한 유지보수에 용이한 프로젝트 설계하기(라우터,컨트롤러,서비스,리포지토리 등 분리)
- Express 환경에서의 타입스크립트 적용
- Express 환경에서 특별한 툴 없이 Class 추상화로만 DI패턴 설계하기
- DTO를 적용하여 계층 간 데이터 전달하기
- 테스트 주도 개발에 대한 이해 및 실행(단위테스트,통합테스트,E2E테스트)
- Swagger를 통한 API 문서화 실행
- Prisma와 같은 ORM을 사용한 DB연동및 리포지토리 설계
- Express와 같은 엔드포인트에서 같은 동작을 하는 NestJS 기반 프로젝트 설계
- NestJS의 모듈기반 아키텍처에 대한 이해 및 편리한 DI에 대한 이해
- 그 외 다양한 NestJS 기반 설계를 Express와 비교하며 학습하여 프로젝트 완성하기
- 계속 된 업데이트로 앞으로도 발전시켜나갈 예정(백엔드 규모가 작은 프로젝트라 학습에 적합하다고 생각)

### 기술 설명

- 프론트엔드(학습의 주 목표가 아니기에 간단히만 설명) : Vite개발환경 기반 리액트 프로젝트, Tailwind기반 디자인, 리액트쿼리 기반 통신, Zustand기반 전역 상태 관리, 외 필요에 따라 각종 라이브러리 사용<br/><br/>

백엔드

- 사용된 DB : Postgresql을 사용, 그리고 ORM 으로는 prisma 사용.

- 암호화 : bcrypt 해싱으로 Local유저들의 비밀번호 관리.

- 인증관리 : 기본적으로 로컬, 소셜로그인 모두 passport 미들웨어를 이용하며, jwt토큰을 클라이언트에 반환함. 리프레시 토큰은 Redis에 저장.

- DTO : class-validator를 Express와 Nest에서 모두 기본적으로 사용

- 테스트 : 기본적으로 Jest를 사용하며, 앞으로도 계속해서 테스트 수정예정

- 배포 : AWS EC2서버와 RDS 데이터베이스를 사용함. 클라이언트는 nginx와 letsencrypt로 관리하며, 백엔드 서버는 pm2로 실행중.

- ExpressJS 구조 설명 : routes(오로지 요청에 대한 경로설정만 담당), controllers(라우터와 연결된 경로기반으로 요청 받음. 이후 연결된 서비스 로직기반으로 결과를 클라이언트에 응답함), services(DB와 연동되는 실제 리포지토리 로직 혹은 integration쪽 로직 사용하여 컨트롤러에 결과 전달), db(DB연결 및 타입지정.), repository(prisma를 이용한 실제 db로직 모음), dependency(종속성 주입을 위한 컨테이너 지정), dto(계층간 데이터 전달을 위한 객체 지정), integrations(마이그레이션 가능성이 있는 외부 라이브러리등의 로직 지정), middlewares(인증 미들웨어 등 모음), shared(전역적으로 사용되는 config 혹은 util 로직등 모음), swagger(스웨거 문서 정리), test(테스트 코드 정리)

- NestJS 구조 설명 : 크게 auth, user, survey 세가지 모듈로 나뉨(redis도 따로 모듈로 관리중). 모듈 내에는 controller, service, respository 크게 세가지로 나뉨. 그리고 각각에 대한 단위테스트를 함께 작성함. 이외 대부분 기능 및 구조가 Express와 유사함.

## 프로젝트 참여

프로젝트 참여를 환영합니다! 기여하려면 다음 단계를 수행하세요

1. 프로젝트를 Fork하세요.
2. 자신만의 branch를 만드세요 (`git checkout -b feature/YourFeature`)
3. 변경 사항을 커밋하세요 (`git commit -m 'Add YourFeature'`)
4. branch를 push하세요 (`git push origin feature/YourFeature`)
5. Pull Requests를 오픈하고 develop 브랜치에 본인의 브랜치를 병합 요청하세요.

## 저작권

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 '라이센스'를 참조하십시오.

## 연락 정보

이승현 - kubrickcode@gmail.com

## 폴더 트리

```
DevProfiler
├─ client
│  ├─ .dockerignore
│  ├─ .eslintrc.cjs
│  ├─ Dockerfile
│  ├─ index.html
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ logo.png
│  │  └─ social_logo
│  │     ├─ google.png
│  │     └─ kakao.png
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ components
│  │  │  ├─ Authorize.tsx
│  │  │  ├─ Modal
│  │  │  │  ├─ Auth
│  │  │  │  │  ├─ Auth.tsx
│  │  │  │  │  ├─ Join.tsx
│  │  │  │  │  └─ Login.tsx
│  │  │  │  ├─ Confirm
│  │  │  │  │  ├─ Confirm.tsx
│  │  │  │  │  ├─ DeleteSurvey.tsx
│  │  │  │  │  └─ UpdateSurvey.tsx
│  │  │  │  └─ Setting
│  │  │  │     ├─ ChangePassword.tsx
│  │  │  │     ├─ DropUser.tsx
│  │  │  │     └─ Setting.tsx
│  │  │  ├─ MyPage
│  │  │  │  └─ MyPage.tsx
│  │  │  └─ Survey
│  │  │     ├─ CustomRadio.tsx
│  │  │     ├─ Evaluation
│  │  │     │  ├─ Evaluation.tsx
│  │  │     │  └─ UserChart.tsx
│  │  │     ├─ Main.tsx
│  │  │     ├─ SelectType
│  │  │     │  ├─ SelectType.tsx
│  │  │     │  └─ SelectTypeButton.tsx
│  │  │     ├─ Survey.tsx
│  │  │     └─ SurveyData
│  │  │        ├─ BackEnd.ts
│  │  │        ├─ BackEndFeedbacks.ts
│  │  │        ├─ FronEndFeedbacks.ts
│  │  │        └─ FrontEnd.ts
│  │  ├─ hooks
│  │  │  ├─ useQueryFetch.tsx
│  │  │  └─ useSign.tsx
│  │  ├─ index.css
│  │  ├─ main.tsx
│  │  ├─ QueryProvider.tsx
│  │  ├─ store
│  │  │  ├─ GlobalStore.ts
│  │  │  ├─ ModalStore.ts
│  │  │  ├─ StoreType.ts
│  │  │  └─ SurveyStore.ts
│  │  └─ vite-env.d.ts
│  ├─ tailwind.config.js
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  ├─ vite.config.ts
│  ├─ vite.config.ts.timestamp-1684591362777-1dbaaf96e6a6a.mjs
│  └─ yarn.lock
├─ docker-compose.yml
├─ express
│  ├─ Dockerfile
│  ├─ jest.config.js
│  ├─ package.json
│  ├─ prisma
│  │  ├─ migrations
│  │  │  ├─ 20230517104407_
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20230517111235_
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20230517111502_
│  │  │  │  └─ migration.sql
│  │  │  └─ migration_lock.toml
│  │  └─ schema.prisma
│  ├─ src
│  │  ├─ controllers
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ survey.controller.ts
│  │  │  └─ user.controller.ts
│  │  ├─ db
│  │  │  ├─ db.type.ts
│  │  │  ├─ Redis.ts
│  │  │  └─ repository
│  │  │     ├─ spec
│  │  │     │  ├─ helper
│  │  │     │  │  ├─ survey
│  │  │     │  │  │  ├─ createSurvey.repository.helper.ts
│  │  │     │  │  │  ├─ deleteAllSurveyByUser.repository.helper.ts
│  │  │     │  │  │  ├─ deleteSurvey.repository.helper.ts
│  │  │     │  │  │  ├─ getSurvey.repository.helper.ts
│  │  │     │  │  │  └─ updateSurvey.repository.helper.ts
│  │  │     │  │  └─ user
│  │  │     │  │     ├─ createUser.repository.helper.ts
│  │  │     │  │     ├─ deleteUser.repository.helper.ts
│  │  │     │  │     ├─ getUserByEmail.repository.helper.ts
│  │  │     │  │     └─ updateUser.repository.helper.ts
│  │  │     │  ├─ survey.repository.spec.ts
│  │  │     │  └─ user.repository.spec.ts
│  │  │     ├─ survey.repository.ts
│  │  │     └─ user.repository.ts
│  │  ├─ dependency
│  │  │  ├─ auth.dependency.ts
│  │  │  ├─ survey.dependency.ts
│  │  │  └─ user.dependency.ts
│  │  ├─ dto
│  │  │  ├─ survey.dto.ts
│  │  │  └─ user.dto.ts
│  │  ├─ index.ts
│  │  ├─ integrations
│  │  │  ├─ handleLogin.ts
│  │  │  └─ handlePassword.ts
│  │  ├─ middlewares
│  │  │  ├─ passport
│  │  │  │  ├─ google.strategy.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ jwt.strategy.ts
│  │  │  │  └─ kakao.strategy.ts
│  │  │  ├─ validateDto.ts
│  │  │  └─ validateToken.ts
│  │  ├─ services
│  │  │  ├─ auth.service.ts
│  │  │  ├─ spec
│  │  │  │  ├─ auth.service.spec.ts
│  │  │  │  ├─ helper
│  │  │  │  │  ├─ auth
│  │  │  │  │  │  ├─ createUser.service.helper.ts
│  │  │  │  │  │  ├─ login.service.helper.ts
│  │  │  │  │  │  └─ refreshToken.service.helper.ts
│  │  │  │  │  ├─ survey
│  │  │  │  │  │  ├─ createSurvey.service.helper.ts
│  │  │  │  │  │  ├─ deleteSurvey.service.helper.ts
│  │  │  │  │  │  ├─ getSurvey.service.helper.ts
│  │  │  │  │  │  └─ updateSurvey.service.helper.ts
│  │  │  │  │  └─ user
│  │  │  │  │     ├─ checkPassword.service.helper.ts
│  │  │  │  │     ├─ deleteUser.service.helper.ts
│  │  │  │  │     ├─ getUser.service.helper.ts
│  │  │  │  │     └─ updateUser.service.helper.ts
│  │  │  │  ├─ survey.service.spec.ts
│  │  │  │  └─ user.service.spec.ts
│  │  │  ├─ survey.service.ts
│  │  │  └─ user.service.ts
│  │  ├─ shared
│  │  │  ├─ config.ts
│  │  │  ├─ passport-custom.d.ts
│  │  │  └─ utils
│  │  ├─ swagger
│  │  │  ├─ auth
│  │  │  │  └─ createUser.yaml
│  │  │  ├─ survey
│  │  │  │  └─ getSurvey.yaml
│  │  │  ├─ swaggerOption.ts
│  │  │  └─ user
│  │  │     └─ getUser.yaml
│  │  └─ test
│  ├─ tsconfig.json
│  └─ yarn.lock
├─ LICENSE
├─ nest
│  ├─ .dockerignore
│  ├─ .eslintrc.js
│  ├─ .prettierrc
│  ├─ Dockerfile
│  ├─ nest-cli.json
│  ├─ package.json
│  ├─ prisma
│  │  ├─ migrations
│  │  │  ├─ 20230520103130_init
│  │  │  │  └─ migration.sql
│  │  │  └─ migration_lock.toml
│  │  └─ schema.prisma
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ auth
│  │  │  ├─ auth.controller.spec.ts
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ auth.module.ts
│  │  │  ├─ auth.service.spec.ts
│  │  │  ├─ auth.service.ts
│  │  │  ├─ interfaces
│  │  │  │  ├─ DecodeToken.interface.ts
│  │  │  │  └─ RequestUser.interface.ts
│  │  │  ├─ passport
│  │  │  │  ├─ google.guard.ts
│  │  │  │  ├─ google.strategy.ts
│  │  │  │  ├─ jwt.guard.ts
│  │  │  │  ├─ jwt.strategy.ts
│  │  │  │  ├─ kakao.guard.ts
│  │  │  │  ├─ kakao.strategy.ts
│  │  │  │  ├─ local.guard.ts
│  │  │  │  └─ local.strategy.ts
│  │  │  └─ pipes
│  │  ├─ integrations
│  │  │  └─ handlePassword.ts
│  │  ├─ main.ts
│  │  ├─ prisma.service.ts
│  │  ├─ redis
│  │  │  ├─ redis.module.ts
│  │  │  ├─ redis.service.spec.ts
│  │  │  └─ redis.service.ts
│  │  ├─ survey
│  │  │  ├─ interfaces
│  │  │  ├─ pipes
│  │  │  ├─ survey.controller.spec.ts
│  │  │  ├─ survey.controller.ts
│  │  │  ├─ survey.dto.ts
│  │  │  ├─ survey.module.ts
│  │  │  ├─ survey.repository.spec.ts
│  │  │  ├─ survey.repository.ts
│  │  │  ├─ survey.service.spec.ts
│  │  │  └─ survey.service.ts
│  │  ├─ swagger
│  │  │  ├─ global.swagger.ts
│  │  │  ├─ global.swagger.type.ts
│  │  │  ├─ survey.swagger.ts
│  │  │  ├─ survey.swagger.type.ts
│  │  │  ├─ user.swagger.ts
│  │  │  └─ user.swagger.type.ts
│  │  └─ user
│  │     ├─ interfaces
│  │     ├─ pipes
│  │     ├─ user.controller.spec.ts
│  │     ├─ user.controller.ts
│  │     ├─ user.dto.ts
│  │     ├─ user.module.ts
│  │     ├─ user.repository.spec.ts
│  │     ├─ user.repository.ts
│  │     ├─ user.service.spec.ts
│  │     └─ user.service.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  ├─ tsconfig.json
│  └─ yarn.lock
├─ package.json
├─ README.md
└─ yarn.lock

```
