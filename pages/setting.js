import React from 'react'
import UserAPI from 'lib/api/user'

const Setting = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  const onSave = async (e) => {
    try {
      const dataUser = {
        email: 'testuser01@test.com',
        username: 'testuser01',
        bio: 'test ka',
        image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
        token: user.token,
      }

      const response = await UserAPI.setting(dataUser)
      console.log('dataUser', dataUser, response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="button"
                  onClick={onSave}
                >
                  Update Settings test
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
