/*
功能：正则表达式验证
参数1：type表达式类型
参数2：被验证值
返回值："√"："×"
**/
 function regular(type,value){
    switch(type){
		//验证邮政编码正则表达式
	    case 'yzbm':
		if((/^[1-9]\d{5}$/.test(value))){
			return "√"
		}else{
			return "×"
		}break;
		//验证文件压缩包正则表达式
		case 'ysb':
		if(/^\w+\.(zip|7z|rar)$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;	
		//验证电子邮件正则表达式
		case 'dzyj':
		if(/^\w+@\w+(\.\w+)+$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;		
		//验证手机号正则表达式
		case 'sjh':
		if(/^1\d{10}$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;		
		//验证身份证正则表达式
		case 'sfz':
		if(/^\d{17}(\d|x)$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;	
		//验证账户名正则表达式	
		case 'zhm':
		if(/^[0-9a-zA-Z_]\w{6,18}$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;		
		//验证IP地址正则表达式
		case 'yzIP':
		if(/^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;	
		//验证日期：年-月-日正则表达式
		case 'rq':
		if(/^\d{2}\d{4}[-\/\.]\d{2}[-\/\.]\d{2}$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;	
        //验证只能输入中文正则表达式
		case 'srzw':
		if(/[^\u4e00-\u9fa5]/.test(value)){
			return "√"
		}else{
			return "×"
		}break;	
		//验证密码正则表达式
		case 'mima':
		if(/^[0-9a-z-A-Z]{6,16}$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;	
		//验证手机邮箱账户
		case 'sjzhyx':
		if(/(^[\u4e00-\u9fa5]{2,4}$)|(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(value)){
			return "√"
		}else{
			return "×"
		}break;	
		case 'dzyj1':
		if(/^\w+@\w+(\.\w+)+$/.test(value)){
			return "√"
		}else{
			return "×"
		}break;	
		default:break;
		
	}
	
 }
