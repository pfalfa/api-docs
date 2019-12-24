/**
 * @swagger
 * tags:
 *  - name: Users
 *    description: Rest API of user profile.
 * paths:
 *  /api/users/{pubkey}:
 *    get:
 *      tags:
 *        - Users
 *      summary: Get profile user
 *      description: <p>Server name <b>https://pfalfa-ihub-api.pfalfa.io</b></p>
 *                   <p>Request params required is <b>pubkey</b>.</p>
 *      parameters:
 *        - in: path
 *          required: true
 *          name: pubkey
 *          type: string
 *          example: kkAdqD4O64fUChTda4W4OKYf1jzuFGf4d_63bt4HiUU.YDVgdrouz_VHS6F390scU8S4kjtM1JOH1T_zkmWJiBw
 *      responses:
 *        200:
 *          description: Response Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseSuccessUserProfile'
 *        400:
 *          description: Response Bad Request.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseBadRequest'
 *
 * definitions:
 *  ResponseSuccessUserProfile:
 *    properties:
 *      success:
 *        type: boolean
 *        example: true
 *      message:
 *        type: string
 *        example: User created successfully
 *      data:
 *        type: object
 *        $ref: '#/definitions/DataUserProfile'
 * 
 *  DataUserProfile:
 *    properties:
 *      alias:
 *        type: string
 *        example: user@email.com
 *      epub:
 *        type: string
 *        example: WWlrjInN3OYCaQEJi0Sc10atE5O1s3WyVLFVuNSKrVg.HrOqPGAHvLvUnToafhqsk8MSWmOp8rdnoBEYmy0V0dI
 *      pub:
 *        type: string
 *        example: kkAdqD4O64fUChTda4W4OKYf1jzuFGf4d_63bt4HiUU.YDVgdrouz_VHS6F390scU8S4kjtM1JOH1T_zkmWJiBw
 */
