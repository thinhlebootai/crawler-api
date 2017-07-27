import {RequestOptions, Headers} from "@angular/http";
/**
 * Created by ThinhPC on 7/27/2017.
 */
export class AppConfig {
  public static host = 'http://localhost:5000';
  public static login = AppConfig.host +'/api/login'
  public static domain = AppConfig.host +'/api/getdomain';
  public static authedOptions: RequestOptions;

  public static getExtHeader() {
        if (!AppConfig.authedOptions) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            AppConfig.authedOptions = new RequestOptions({headers: headers});
        }

        return AppConfig.authedOptions;
  }


}
