import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Row, Input, TextArea, Button } from '../../components/ui';

const QuoteSchema = Yup.object().shape({
  author: Yup.string().required("Author can't be empty"),
  body: Yup.string().required("Body can't be empty"),
  source: Yup.string().url().required("Source can't be empty")
});

const Form = () => (
  <div>
    <Formik
      initialValues={{ author: '', body: '', source: '' }}
      validationSchema={QuoteSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
          <form onSubmit={handleSubmit}>
            <Row marginY="30px">
              <label>Author</label>
              <Input
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </Row>
            <Row marginB="30px">
              <label>Source</label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </Row>
            <Row marginT="30px" marginB="50px">
              <label>Body</label>
              <TextArea
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
                rows={3}
              ></TextArea>
              {errors.body && touched.body && errors.body}
            </Row>
            <Button type="submit" disabled={isSubmitting}>
              Create Quote
          </Button>
          </form>
        )}
    </Formik>
  </div>
);

export default Form;