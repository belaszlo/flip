import Form from '../Form';
import InputRegular from '../InputRegular';
import InputTextarea from '../InputTextarea';
import useFetchWithAuthorization from '../../useFetchWithAuthorization';

export default function NewArticleForm({ showForm, hideFormHandler, getArticles }) {
  const fetchWithAuthorization = useFetchWithAuthorization();

  const initalValues = {
    title: '',
    content: '',
  };

  function isNotEmpty(value) {
    return value !== '';
  }

  const validators = {
    title: [
      {
        fn: isNotEmpty,
        errorMessage: 'A cím megadása kötelező.',
      },
    ],
    content: [
      {
        fn: isNotEmpty,
        errorMessage: 'A tartalom megadása kötelező.',
      },
    ],
  };

  async function handleSubmit(
    event,
    formData,
    setFormData,
    setErrorMessages,
    setFormAlertType,
    setFromAlertText,
    reportFormValidity,
    setWasValidated,
  ) {
    const articleData = {
      title: formData.title,
      content: formData.content,
    };

    event.preventDefault();

    const formIsValid = reportFormValidity();

    if (formIsValid) {
      let response;

      try {
        response = await fetchWithAuthorization(`${process.env.REACT_APP_API_BASE_URL}/api/admin/news`, {
          method: 'POST',
          body: JSON.stringify(articleData),
          headers: {
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();

        if (response.ok) {
          setFormData(initalValues);
          setErrorMessages({});
          setFormAlertType('');
          setFromAlertText('');
          setWasValidated(false);
          getArticles();
        } else {
          setWasValidated(false);
          setFormAlertType('danger');
          setFromAlertText(data.error);
        }
      } catch (err) {
        setWasValidated(false);
        setFormAlertType('danger');
        setFromAlertText('Sikertelen volt az új hír hozzáadása.');
      }
    }
  }

  return (
    <main className="container">

      <Form
        title="Új hír hozzáadása"
        handleSubmit={handleSubmit}
        initalValues={initalValues}
        validators={validators}
        btnTitle="Mentés"
        hideFormHandler={hideFormHandler}
        showForm={showForm}
        id="addArticleForm"
      >
        {(
          handleOnChange,
          getValidationClassName,
          errorMessages,
          formData,
        ) => (
          <>
            <InputRegular
              label="Cím"
              type="text"
              name="title"
              className="input-field"
              handleOnChange={handleOnChange}
              getValidationClassName={getValidationClassName}
              errorMessages={errorMessages.title}
              value={formData.title}
              placeholder="Cím*"
            />
            <InputTextarea
              label="Szöveg"
              type="textarea"
              name="content"
              handleOnChange={handleOnChange}
              getValidationClassName={getValidationClassName}
              errorMessages={errorMessages.content}
              value={formData.content}
              placeholder="Szöveg*"
              height="250px"
            />
          </>
        )}
      </Form>
    </main>
  );
}
