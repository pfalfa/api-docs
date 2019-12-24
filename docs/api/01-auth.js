/**
 * @swagger
 * tags:
 *  - name: Authorization
 *    description: Rest API of user authorization (login, register, forgot password, reset password and unregister).
 * paths:
 *  /api/auth/register:
 *    post:
 *      tags:
 *        - Authorization
 *      summary: Register new user
 *      description: <p>Server name <b>https://pfalfa-ihub-api.pfalfa.io</b></p>
 *                   <p>Request body required is <b>email, passphare, hint</b>.</p>
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/PayloadRegister'
 *      responses:
 *        200:
 *          description: Response Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseSuccessRegister'
 *        400:
 *          description: Response Bad Request.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseBadRequest'
 *
 *  /api/auth/login:
 *    post:
 *      tags:
 *        - Authorization
 *      summary: Login user
 *      description: <p>Server name <b>https://pfalfa-ihub-api.pfalfa.io</b></p>
 *                   <p>Request body required is <b>email, passphare</b>.</p>
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/PayloadLogin'
 *      responses:
 *        200:
 *          description: Response Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseSuccessLogin'
 *        400:
 *          description: Response Bad Request.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseBadRequest'
 *
 *  /api/auth/forgot:
 *    post:
 *      tags:
 *        - Authorization
 *      summary: Forgot password user
 *      description: <p>Server name <b>https://pfalfa-ihub-api.pfalfa.io</b></p>
 *                   <p>Request body required is <b>email, hint</b>.</p>
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/PayloadForgot'
 *      responses:
 *        200:
 *          description: Response Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseSuccessForgot'
 *        400:
 *          description: Response Bad Request.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseBadRequest'
 *  /api/auth/reset:
 *    post:
 *      tags:
 *        - Authorization
 *      summary: Reset password user
 *      description: <p>Server name <b>https://pfalfa-ihub-api.pfalfa.io</b></p>
 *                   <p>Request body required is <b>email, oldPassphare, newPassphare</b>.</p>
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/PayloadReset'
 *      responses:
 *        200:
 *          description: Response Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseSuccessReset'
 *        400:
 *          description: Response Bad Request.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseBadRequest'
 *  /api/auth/change-password:
 *    post:
 *      tags:
 *        - Authorization
 *      summary: Change password user
 *      description: <p>Server name <b>https://pfalfa-ihub-api.pfalfa.io</b></p>
 *                   <p>Request body required is <b>email, oldPassphare, newPassphare</b>.</p>
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/PayloadChangePassword'
 *      responses:
 *        200:
 *          description: Response Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseSuccessChangePassword'
 *        400:
 *          description: Response Bad Request.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseBadRequest'
 *
 * definitions:
 *  PayloadRegister:
 *    properties:
 *      email:
 *        type: string
 *        example: user@email.com
 *      passphare:
 *        type: string
 *        example: P@ssw0rd
 *      hint:
 *        type: string
 *        example: Sebuah Kata Hint
 *  PayloadLogin:
 *    properties:
 *      email:
 *        type: string
 *        example: user@email.com
 *      passphare:
 *        type: string
 *        example: P@ssw0rd
 *  PayloadForgot:
 *    properties:
 *      email:
 *        type: string
 *        example: user@email.com
 *      hint:
 *        type: string
 *        example: Sebuah Kata Hint
 *  PayloadReset:
 *    properties:
 *      email:
 *        type: string
 *        example: user@email.com
 *      oldPassphare:
 *        type: string
 *        example: vaP5o(ii
 *      newPassphare:
 *        type: string
 *        example: new-password
 *  PayloadChangePassword:
 *    properties:
 *      email:
 *        type: string
 *        example: user@email.com
 *      oldPassphare:
 *        type: string
 *        example: new-password
 *      newPassphare:
 *        type: string
 *        example: P@ssw0rd
 *  ResponseSuccessRegister:
 *    properties:
 *      success:
 *        type: boolean
 *        example: true
 *      message:
 *        type: string
 *        example: User created successfully
 *      data:
 *        type: object
 *        $ref: '#/definitions/DataUser'
 *  ResponseSuccessLogin:
 *    properties:
 *      success:
 *        type: boolean
 *        example: true
 *      message:
 *        type: string
 *        example: User login successfully
 *      data:
 *        type: object
 *        $ref: '#/definitions/DataUser'
 *  ResponseSuccessForgot:
 *    properties:
 *      success:
 *        type: boolean
 *        example: true
 *      message:
 *        type: string
 *        example: Temp password has been send
 *      data:
 *        type: string
 *        example: vaP5o(ii
 *  ResponseSuccessReset:
 *    properties:
 *      success:
 *        type: boolean
 *        example: true
 *      message:
 *        type: string
 *        example: Reset password successfully
 *      data:
 *        type: object
 *        example: null
 *  ResponseSuccessChangePassword:
 *    properties:
 *      success:
 *        type: boolean
 *        example: true
 *      message:
 *        type: string
 *        example: Change password successfully
 *      data:
 *        type: object
 *        example: null
 * 
 *  DataUser:
 *    properties:
 *      pub:
 *        type: string
 *        example: 3dSC18IJNY2BiAKjoST5GUukiLmfAm8LYNgHkANQKXQ.81IFAqp3pJTlBKdPg1kbSqoqIXnbrk7C7vGjN3ozY_A
 *      epub:
 *        type: string
 *        example: w3O9QMv3CRHPXH_znH2s1YpUjNLoC3cS25ilaqX8CJM.EJR4LBQUxqpq3D9SPPkSzkVEk3wZIfQd0PEoFLDGONE
 *      priv:
 *        type: string
 *        example: KL6fov_S4Tz2BG4p5FgPjUwIaKG_6rVZVFuHOUivuww
 *      epriv:
 *        type: string
 *        example: g0foq9F44FtvHHwopa1W-Mn80umJzgFB1uugzw9ZZDs
 *      profile:
 *        type: object
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            example: user@email.com
 *          hint:
 *            type: string
 *            example: Sebuah Kata Hint
 */
