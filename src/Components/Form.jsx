import * as Yup from 'yup'
import {useState} from "react";
import {useFormik} from "formik";


export default function Form() {
    let [method,setMethod]=useState(true)
    let validateSchema=Yup.object().shape({
        name:Yup.string().required('This field is required'),
        contactImp:method ? Yup.string().email('invalid email').required('This field is required') : Yup.string().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required('This field is required'),
        date:Yup.date().min(new Date(),'wrong date').required('This field required'),
        personas:Yup.number().positive(),
        req:Yup.string()
    })
    let form=useFormik({
        initialValues:{
            name:'',
            contactImp:"",
            date:new Date(),
            personas:1,
            req:''
        },
        validationSchema:validateSchema,
        onSubmit:(values,{resetForm})=>{
            resetForm()
        }
    })
    return (<form className={' mx-md-auto m-3 w-75'} onSubmit={form.handleSubmit}>
            <label For="name" className={'form-label'}>Name*</label>
            <input id={'name'} type={"text"} className={'form-control '} placeholder={'Your name'} value={form.values.name} onChange={form.handleChange}/>
            <p className={'text-danger errM'}>{form.errors.name}</p>
            <p className={'form-label py-1'}>Please select your preferred contact method*</p>
            <div className={' form-check-inline'}>
                <input type={"radio"} name={'contact'} className={'form-check-input px-1'} id={'email'} checked={method} onClick={()=>setMethod(true)}/>
                <label For='email' className={'form-check-label px-1'}>Email</label>
                <input type={'radio'} name={'contact'} className={'form-check-input px-1'} id={'phone'} checked={!method} onClick={()=>setMethod(false)}/>
                <label For='phone' className={'form-check-label px-1'}>Phone Number</label>
            </div>
            <input type="text" id={'contactImp'} className={'col-12 form-control '} placeholder={method ? 'write email':'write phone number'} onChange={form.handleChange} value={form.values.contactImp}/>
            <p className={'text-danger errM'}>{form.errors.contactImp}</p>
            <label For="date" className={'form-label'}>Choose date and time*</label>
            <input type="datetime-local" className={'form-control'} name="date" id="date" onChange={form.handleChange} value={form.values.data}/>
            <p className={'text-danger errM'}>{form.errors.date}</p>
            <label For="personas" className={'form-label'}>Number of personas</label>
            <div className="row container-fluid justify-content-center">
                <button className={'col-3 pmBtn form-control'} onClick={()=> form.values.personas += 1}>+</button>
                <input className={'col-4 w-25 form-control'} type={'number'} value={form.values.personas} min={1} id={'personas'} name={'personas'} onChange={form.handleChange} />
                <button className={'col-3 pmBtn form-control'} onClick={()=> form.values.personas -=1}>-</button>
            </div>
            <label For='req' className={'form-label'}>special request:</label>
            <textarea className={'form-control'} onChange={form.handleChange}  name={'req'} id={'req'} value={form.values.req} placeholder={'write here'}></textarea>
            <button type='submit' name=""    className={' btn bg-primary  my-2'} id="">Submit</button>
        </form>)
}
