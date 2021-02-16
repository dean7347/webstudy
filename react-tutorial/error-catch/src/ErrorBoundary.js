import React,{Component} from 'react';
import * as Sentry from "@sentry/react";
class ErrorBoundary extends Component {
    state = {
    error : false
    };

    componentDidCatch(error, info){
        console.log('에러발생');
        console.log({
            error,
            info
        });
        this.setState({
            error:true
        });

        if(process.env.NODE_ENV =='production')
        {
            Sentry.captureException(error,{extra:info});
        }
    }

    //컴포넌트 사이에 들어온것을 그대로 렌더링하겠다
    render(){
        if(this.state.error){
            return <h1>error 발생</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;