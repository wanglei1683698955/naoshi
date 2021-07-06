import styled from "styled-components"
export let PersonnelListStyled = styled.div`
    padding: 10px;
    input.personnelListSer1{
        height: 34px;
        width: 160px;
        text-indent:10px;
        border-radius:4px;
        border: none;
        outline: none;
        margin-left: 10px;
    }
    button.personnelListSer2{
        height: 34px;
        padding: 0 10px;
        background-color: rgb(90, 210, 140);
        border-radius:4px;
        border: none;
        outline: none;
        margin-left: 10px;
        color: white;
    }
    div.pos{
        height: 0;
        position: relative;
        .quanp{
            position: absolute;
            top: 0px;
            left: 180px;
            width: 320px;
            height: 300px;
            border:1px solid #999;
            background-color: white;
            z-index:1;
            padding: 10px;
            div{
                width: 100%;
                input{
                    margin:10px 0;
                    width: 100%;
                    text-indent:10px;
                    border-radius:4px;
                    border: 1px solid #bbb;
                    outline: none;
                }
            }
        }
    }
    .personnelListTab{
        margin-top: 6px;
        max-height: 400px;
        overflow-y: auto;
    }
    button.personnelListTabBut1{
        height: 34px;
        padding: 0 10px;
        background-color: rgb(0, 155, 226);
        border-radius:4px;
        border: none;
        outline: none;
        margin-left: 10px;
        color: white;
        cursor: pointer;
    }
    button.personnelListTabBut2{
        height: 34px;
        padding: 0 10px;
        background-color: rgb(238, 61, 61);
        border-radius:4px;
        border: none;
        outline: none;
        margin-left: 10px;
        color: white;
        cursor: pointer;
    }
    
`