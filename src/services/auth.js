import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const getAccountInfo = (accessData) =>
  new Promise((resolve, reject) => {
    new GraphRequestManager()
      .addRequest(
        new GraphRequest(
          '/me',
          {
            accessToken: accessData.accessToken,
            parameters: {
              fields: {
                string: 'id, first_name, last_name, email, picture.type(large)',
              },
            },
          },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            return resolve(result);
          },
        ),
      )
      .start();
  });

export const facebookLogin = async () => {
  //   try {
  //     result = LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  //     if (result.isCancelled) {
  //       return {error: 'Usuário cancelou o login'};
  //     }
  //     const accessData = await AccessToken.getCurrentAccessToken();
  //     const info = await getAccountInfo(accessData);
  //     return {user: info, accessToken: accessData.accessToken};
  //   } catch (err) {
  //     throw new Error(err);
  //   }

  LoginManager.logInWithPermissions(['public_profile']).then(
    function (result) {
      if (result.isCancelled) {
        return {error: 'Usuário cancelou o login'};
      } else {
        const accessData = AccessToken.getCurrentAccessToken();
        const info = getAccountInfo(accessData);
        return {user: info, accessToken: accessData.accessToken};
      }
    },
    function (error) {
      console.log('Login fail with error: ' + error);
    },
  );
};
