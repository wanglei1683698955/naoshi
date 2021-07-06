import styled from "styled-components"
export let LoginStyled = styled.div`
    height: 100%;
    overflow-y: hidden;
    background: url(../images/login_bg.jpg) no-repeat;
    background-position: top;
    background-size: 100% 280%;
    #login{
        width: 360px;
        background-color: #eee;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 320px;
        border-radius: 6px;
        padding: 20px 40px;
        .loginPadd{
            width: 100%;
            h1{
                font-size: 15px;
            }
            color: #666;
            .loginBut{
                width: 100%;
                height: 38px;
                outline: none;
                border-radius: 2px;
                border:none;
                background-color: rgb(255, 195, 31);
                color: #333;
                font-weight: 600;
            }
            h2{
                text-align: right;
                font-size: 12px;
                padding: 4px 2px;
                color: #666;
            }
        }
    }
`