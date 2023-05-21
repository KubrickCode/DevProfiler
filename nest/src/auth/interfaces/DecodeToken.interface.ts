interface DecodedToken {
  username: string;
  sub: number;
  iat?: number;
  exp?: number;
}

export { DecodedToken };
