import { Interceptor, InterceptorInterface, Action } from "routing-controllers";

@Interceptor()
export class ResponseInterceptor implements InterceptorInterface {

    intercept(action: Action, content: any) {
      console.log('Response Interceptor');
      console.log(action);
      console.log(content);
      return content;
    }

}