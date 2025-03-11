import Link from 'next/link';
import { AuthContainer_Community } from '@/@layout_community/hooks/useAuth';
import { text } from './auth.helpers';
import { emptyString, stringSpace } from '@/@layout_shared/helpers/general.helpers';

export default function Auth_Community() {
  const { isLogin, isSignup } = AuthContainer_Community.useContainer();

  return (
    <div className="wrap_1">
      <div className="auto-margin wrap_2 separator-margin_ttb">
        <h2 className="auto-margin wrap_3">{isLogin && text.login.replace(stringSpace, emptyString)} {isSignup && text.signup.replace(stringSpace, emptyString)} Form</h2>
        <form className="auto-margin wrap_3">
          <div className="auto-margin wrap_3_sibling_group">
            <label htmlFor="input_email">Email</label>
            <input type="email" name="name_email" id="input_email" placeholder="Enter email" />
          </div>
          <div className="auto-margin wrap_3_sibling_group">
            <label htmlFor="input_password">Password</label>
            <input type="password" name="name_password" id="input_password" placeholder="Enter password"/>
          </div>
          {isSignup && <>
            <div className="auto-margin wrap_3_sibling_group">
              <label htmlFor="input_confirm_password">Confirm password</label>
              <input type="password" name="name_confirm_password" id="inputconfirm__password" placeholder="Confirm password"/>
            </div>
          </>}
          <button className="auto-margin wrap_3_sibling_group separator-margin_ttb" type="submit">{isLogin && text.login} {isSignup && text.signup}</button>
        </form>
        <hr className="auto-margin wrap_3" />
        <button className="auto-margin wrap_3 separator-margin_ttb" type="submit">{isLogin && text.login} {isSignup && text.signup} with Google</button>
        <hr className="auto-margin wrap_3" />
        <p className="auto-margin wrap_3 center_text">
          {isLogin ? 'Don\'t ' : 'Already '} have an account? <Link href={isLogin ? `/${text.signup.replace(stringSpace, emptyString).toLowerCase()}` : `/${text.login.replace(stringSpace, emptyString).toLowerCase()}`}>{isLogin ? text.signup : text.login} here</Link>
        </p>
      </div>
    </div>
  );
}
