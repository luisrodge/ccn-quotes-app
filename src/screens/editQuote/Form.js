import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import theme from '../../utils/theme';

import { Row, Input, TextArea, Button, Text } from '../../components/ui';

const QuoteSchema = Yup.object().shape({
  author: Yup.string().required("Author can't be empty"),
  body: Yup.string().required("Body can't be empty"),
  source: Yup.string().url().required("Source can't be empty")
});

const Form = ({ quote, updateQuote }) => (
  <div>
    <Formik
      initialValues={{
        author: quote.author,
        body: quote.body,
        source: quote.source
      }}
      validationSchema={QuoteSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submit")
        updateQuote(values, setSubmitting);
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
      }) => (
          <form onSubmit={handleSubmit} data-cy="edit-form">
            <Row marginY="30px">
              <label htmlFor="author">Author</label>
              <Input
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
                border={errors.author && touched.author && `1px solid ${theme.colors.red}`}
                data-cy="author-input"
              />
              {errors.author && touched.author && <Text color={theme.colors.red} paddingT="10px">{errors.author}</Text>}
            </Row>
            <Row marginB="30px">
              <label htmlFor="source">Source</label>
              <Input
                name="source"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.source}
                border={errors.source && touched.source && `1px solid ${theme.colors.red}`}
                data-cy="source-input"
              />
              {errors.source && touched.source && <Text color={theme.colors.red} paddingT="10px">{errors.source}</Text>}
            </Row>
            <Row marginT="30px" marginB="40px">
              <label htmlFor="body">Body</label>
              <TextArea
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
                rows={2}
                border={errors.body && touched.body && `1px solid ${theme.colors.red}`}
                data-cy="body-input"
              ></TextArea>
              {errors.body && touched.body && <Text color={theme.colors.red} paddingT="10px">{errors.body}</Text>}
            </Row>
            <Button type="submit" disabled={isSubmitting}>
              Update Quote
            </Button>
          </form>
        )}
    </Formik>
  </div>
);

Form.propTypes = {
  updateQuote: PropTypes.func.isRequired,
};

export default Form;