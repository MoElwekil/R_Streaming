import React, {Component} from 'react'
import { Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'

import {createStream} from '../../actions'


class StreamCreate extends Component{
    renderError({error, touched}){
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({input, meta, label, placeHolder, type }) => {
        const errorClassName = meta.error && meta.touched ? 'field error' : 'field'
        return (
            <div className={errorClassName}>
                <label>{label}</label>
                <input {...input} type={type} placeholder={placeHolder} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }
    render(){
        return (
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" style={{maxWidth:500,margin:'20px auto'}}>
                    <Field name="title" component={this.renderInput} type="text" label="Stream Title" placeHolder="Stream Title" />
                    <Field name="description" component={this.renderInput} type="text" label="Stream Description" placeHolder="Stream Description"/>
                    <button className="ui button" type="submit">Submit</button>
                </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = 'You must enter description';
    }

    return errors;

}

const mapStateToProps = (state) => {
    return state.form;
}

const reduxFormWrapper = reduxForm({
    form: 'createStream',
    validate
})(StreamCreate)

export default connect(mapStateToProps, {createStream})(reduxFormWrapper)