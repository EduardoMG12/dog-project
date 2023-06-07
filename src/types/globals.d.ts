export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
        THE_DOG_API:string,
        DOG_API:string,
        URL_TO_API:string

    }
  }
}
