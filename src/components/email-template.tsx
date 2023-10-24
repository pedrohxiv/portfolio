interface EmailTemplateProps {
  subject: string;
  message: string;
}

export const EmailTemplate = ({ subject, message }: EmailTemplateProps) => {
  return (
    <>
      <h1>{subject}</h1>
      <p>Thank you for contacting me!</p>
      <p>Message submitted:</p>
      <p>{message}</p>
    </>
  );
};
