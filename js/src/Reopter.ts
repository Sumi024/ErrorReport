import axios from 'axios';
import NetPerformance from './NetPerformance';
import {ReporterConfig} from './type/type';
class Reporter {
    private PostUrl : string = '';
    private PostMethod : string = 'POST';
    constructor (ReporterConfig:ReporterConfig){
        (<any>Object).assign(this,ReporterConfig);
    }

    public sendLog (params : any = {}) {
        const LOG_PARAMS = {
            NetPerformance,
            params
        };
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: this.PostUrl,
            method: this.PostMethod,
            params: this.PostMethod.toLocaleLowerCase() === 'get' ? LOG_PARAMS : undefined,
            data: this.PostMethod.toLocaleLowerCase() === 'post' ? LOG_PARAMS : undefined,
        };

        return axios({

        })
    }
}