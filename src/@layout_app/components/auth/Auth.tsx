import Link from 'next/link';
import { AuthContainer_Community } from '@/@layout_app/hooks/useAuth';
import { text } from './auth.helpers';
import { emptyString, stringSpace } from '@/@layout_shared/helpers/general.helpers';

export default function Auth_Community() {
  const { isLogin, isSignup, handleAuth, loading, error, message, googleSignIn, googleLoading } = AuthContainer_Community.useContainer();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem('name_email') as HTMLInputElement)?.value;
    const password = (e.currentTarget.elements.namedItem('name_password') as HTMLInputElement)?.value;
    const confirmPassword = isSignup
      ? (e.currentTarget.elements.namedItem('name_confirm_password') as HTMLInputElement)?.value
      : undefined;

    handleAuth(email, password, confirmPassword);
  };

  return (
    <div className="wrap_1 auth_page">
      <div className="auto-margin wrap_2 separator-margin_ttb">
        <h2 className="auto-margin wrap_3">{isLogin && text.login.replace(stringSpace, emptyString)} {isSignup && text.signup.replace(stringSpace, emptyString)} Form</h2>
        
        {error && <p className="center_text error_message">{error}</p>} {/* Display error */}
        {message && <p className="center_text success_message">{message}</p>} {/* Display Success Message on Successfull Signup */}
        
        <form className="auto-margin wrap_3" onSubmit={onSubmit}>
          <div className="auto-margin wrap_3_sibling_group">
            <label htmlFor="input_email">Email</label>
            <input type="email" name="name_email" id="input_email" placeholder="Enter email" required />
          </div>
          <div className="auto-margin wrap_3_sibling_group">
            <label htmlFor="input_password">Password</label>
            <input type="password" name="name_password" id="input_password" placeholder="Enter password" required/>
          </div>
          {isSignup && <>
            <div className="auto-margin wrap_3_sibling_group">
              <label htmlFor="input_confirm_password">Confirm password</label>
              <input type="password" name="name_confirm_password" id="inputconfirm__password" placeholder="Confirm password" required/>
            </div>
          </>}
          <button className="auto-margin wrap_3_sibling_group separator-margin_ttb" type="submit">{isLogin && text.login} {isSignup && text.signup}</button>
        </form>
        <hr className="auto-margin wrap_3" />
        <button className="auto-margin wrap_3 separator-margin_ttb" type="button" onClick={googleSignIn}>{isLogin && text.login} {isSignup && text.signup} with Google</button>
        <hr className="auto-margin wrap_3" />
        <p className="auto-margin wrap_3 center_text">
          {isLogin ? 'Don\'t ' : 'Already '} have an account? <Link href={isLogin ? `/${text.signup.replace(stringSpace, emptyString).toLowerCase()}` : `/${text.login.replace(stringSpace, emptyString).toLowerCase()}`}>{isLogin ? text.signup : text.login} here</Link>
        </p>
      </div>
      
      {/* Toaster */}
      {(loading || googleLoading) && (
        <div className="custom_toast">
          {`Processing${googleLoading ? ' Google': ''} ${isLogin ? text.login : text.signup}...`}
        </div>
      )}
    </div>
  );
}
