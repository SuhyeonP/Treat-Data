import {useEffect,useState,memo} from 'react'
import useInput from "../../config/useInput";
import {Form} from 'antd'


const LsJoin=memo(()=>{
    const [tempId,onChangeTempId]=useInput('')
    const [tempPw,onChangeTempPw]=useInput('')
    const [gotoJoin,setJoin]=useState(false)

    const onSubmitLogin=()=>{

    }
    const onSubmitJoin=()=>{

    }
    const signUpBtn=()=>{
        setJoin(true)
    }
    const goBack=()=>{
        setJoin(false)
    }

    return (
        <div className="temp-login">
            {gotoJoin?
                <Form onFinish={onSubmitJoin}  className="input-form">
                    <div>
                        <label htmlFor="tempId">ID:&nbsp;</label>
                        <input value={tempId} name="tempId" onChange={onChangeTempId}/>
                    </div>
                    <div>
                        <label htmlFor="tempPw">PW:&nbsp;</label>
                        <input value={tempPw} name="tempPw" onChange={onChangeTempPw}/>
                    </div>
                    <button>SingUp</button>
                    <button typeof="button" className="goback-login" onClick={goBack}>로그인으로 돌아가기</button>
                </Form>
                :
                <Form onFinish={onSubmitLogin} className="input-form">
                    <div>
                        <label htmlFor="tempId">ID:&nbsp;</label>
                        <input value={tempId} name="tempId" onChange={onChangeTempId}/>
                    </div>
                    <div>
                        <label htmlFor="tempPw">PW:&nbsp;</label>
                        <input value={tempPw} name="tempPw" onChange={onChangeTempPw}/>
                    </div>
                    <button>Login</button>
                    <button typeof="button"  className="goback-login" onClick={signUpBtn}>회원가입</button>
                </Form>
            }
        </div>
    )
})
export default LsJoin;