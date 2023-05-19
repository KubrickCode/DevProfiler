import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "Express API",
      version: "1.0.0",
      description: "Express API를 위한 swagger 문서",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            id: { type: "integer" },
            email: { type: "string" },
            provider: {
              type: "string",
              enum: ["Local", "Google", "Kakao"],
            },
            password: { type: "string" },
            token: { type: "string" },
            refreshToken: { type: "string" },
          },
        },
        Survey: {
          type: "object",
          properties: {
            id: { type: "integer" },
            user_id: { type: "integer" },
            category: { type: "string", enum: ["FrontEnd", "BackEnd"] },
            response: {
              type: "array",
              items: { type: "integer" },
            },
          },
        },
      },
    },
    tags: [
      {
        name: "Auth",
        description: "인증 정보 관련 API",
      },
      {
        name: "User",
        description: "유저 정보 관련 API",
      },
      {
        name: "Survey",
        description: "검사 결과 관련 API",
      },
    ],
  },
  apis: ["./**/*.yaml"],
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

export { swaggerSpecs };
