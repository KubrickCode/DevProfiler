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

추후 설명

## 상세 기술 설명

추후 설명

## 프로젝트 참여

프로젝트 참여를 환영합니다! 기여하려면 다음 단계를 수행하세요:

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