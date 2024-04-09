export type { };
 
declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "admin" | "user";
      points?: number;
    };
  }
}