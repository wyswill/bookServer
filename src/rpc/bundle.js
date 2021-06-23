/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.book = (function() {

    /**
     * Namespace book.
     * @exports book
     * @namespace
     */
    var book = {};

    book.book_service = (function() {

        /**
         * Constructs a new book_service service.
         * @memberof book
         * @classdesc Represents a book_service
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function book_service(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (book_service.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = book_service;

        /**
         * Creates new book_service service using the specified rpc implementation.
         * @function create
         * @memberof book.book_service
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {book_service} RPC service. Useful where requests and/or responses are streamed.
         */
        book_service.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link book.book_service#login}.
         * @memberof book.book_service
         * @typedef loginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.LoginRsp} [response] LoginRsp
         */

        /**
         * Calls login.
         * @function login
         * @memberof book.book_service
         * @instance
         * @param {user.ILoginReq} request LoginReq message or plain object
         * @param {book.book_service.loginCallback} callback Node-style callback called with the error, if any, and LoginRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(book_service.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.user.LoginReq, $root.user.LoginRsp, request, callback);
        }, "name", { value: "login" });

        /**
         * Calls login.
         * @function login
         * @memberof book.book_service
         * @instance
         * @param {user.ILoginReq} request LoginReq message or plain object
         * @returns {Promise<user.LoginRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link book.book_service#registerUser}.
         * @memberof book.book_service
         * @typedef registerUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.userBaseRsp} [response] userBaseRsp
         */

        /**
         * Calls registerUser.
         * @function registerUser
         * @memberof book.book_service
         * @instance
         * @param {user.IregisterUserReq} request registerUserReq message or plain object
         * @param {book.book_service.registerUserCallback} callback Node-style callback called with the error, if any, and userBaseRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(book_service.prototype.registerUser = function registerUser(request, callback) {
            return this.rpcCall(registerUser, $root.user.registerUserReq, $root.user.userBaseRsp, request, callback);
        }, "name", { value: "registerUser" });

        /**
         * Calls registerUser.
         * @function registerUser
         * @memberof book.book_service
         * @instance
         * @param {user.IregisterUserReq} request registerUserReq message or plain object
         * @returns {Promise<user.userBaseRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link book.book_service#queryUserById}.
         * @memberof book.book_service
         * @typedef queryUserByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.userBaseRsp} [response] userBaseRsp
         */

        /**
         * Calls queryUserById.
         * @function queryUserById
         * @memberof book.book_service
         * @instance
         * @param {user.IqueryUserByIdReq} request queryUserByIdReq message or plain object
         * @param {book.book_service.queryUserByIdCallback} callback Node-style callback called with the error, if any, and userBaseRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(book_service.prototype.queryUserById = function queryUserById(request, callback) {
            return this.rpcCall(queryUserById, $root.user.queryUserByIdReq, $root.user.userBaseRsp, request, callback);
        }, "name", { value: "queryUserById" });

        /**
         * Calls queryUserById.
         * @function queryUserById
         * @memberof book.book_service
         * @instance
         * @param {user.IqueryUserByIdReq} request queryUserByIdReq message or plain object
         * @returns {Promise<user.userBaseRsp>} Promise
         * @variation 2
         */

        return book_service;
    })();

    return book;
})();

$root.comm = (function() {

    /**
     * Namespace comm.
     * @exports comm
     * @namespace
     */
    var comm = {};

    comm.baseRsp = (function() {

        /**
         * Properties of a baseRsp.
         * @memberof comm
         * @interface IbaseRsp
         * @property {number} code baseRsp code
         * @property {string} msg baseRsp msg
         */

        /**
         * Constructs a new baseRsp.
         * @memberof comm
         * @classdesc Represents a baseRsp.
         * @implements IbaseRsp
         * @constructor
         * @param {comm.IbaseRsp=} [properties] Properties to set
         */
        function baseRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * baseRsp code.
         * @member {number} code
         * @memberof comm.baseRsp
         * @instance
         */
        baseRsp.prototype.code = 0;

        /**
         * baseRsp msg.
         * @member {string} msg
         * @memberof comm.baseRsp
         * @instance
         */
        baseRsp.prototype.msg = "";

        /**
         * Creates a new baseRsp instance using the specified properties.
         * @function create
         * @memberof comm.baseRsp
         * @static
         * @param {comm.IbaseRsp=} [properties] Properties to set
         * @returns {comm.baseRsp} baseRsp instance
         */
        baseRsp.create = function create(properties) {
            return new baseRsp(properties);
        };

        /**
         * Encodes the specified baseRsp message. Does not implicitly {@link comm.baseRsp.verify|verify} messages.
         * @function encode
         * @memberof comm.baseRsp
         * @static
         * @param {comm.IbaseRsp} message baseRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        baseRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified baseRsp message, length delimited. Does not implicitly {@link comm.baseRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof comm.baseRsp
         * @static
         * @param {comm.IbaseRsp} message baseRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        baseRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a baseRsp message from the specified reader or buffer.
         * @function decode
         * @memberof comm.baseRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {comm.baseRsp} baseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        baseRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.comm.baseRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            if (!message.hasOwnProperty("msg"))
                throw $util.ProtocolError("missing required 'msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a baseRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof comm.baseRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {comm.baseRsp} baseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        baseRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a baseRsp message.
         * @function verify
         * @memberof comm.baseRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        baseRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (!$util.isString(message.msg))
                return "msg: string expected";
            return null;
        };

        /**
         * Creates a baseRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof comm.baseRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {comm.baseRsp} baseRsp
         */
        baseRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.comm.baseRsp)
                return object;
            var message = new $root.comm.baseRsp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a baseRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof comm.baseRsp
         * @static
         * @param {comm.baseRsp} message baseRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        baseRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this baseRsp to JSON.
         * @function toJSON
         * @memberof comm.baseRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        baseRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return baseRsp;
    })();

    comm.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof comm
         * @interface IUserInfo
         * @property {number|null} [rdID] UserInfo rdID
         * @property {string|null} [rdName] UserInfo rdName
         * @property {comm.UserInfo.Sex|null} [rdSex] UserInfo rdSex
         * @property {comm.UserInfo.rdTypes|null} [rdType] UserInfo rdType
         * @property {string|null} [rdDept] UserInfo rdDept
         * @property {string|null} [rdPhone] UserInfo rdPhone
         * @property {string|null} [rdEmail] UserInfo rdEmail
         * @property {string|null} [rdDateReg] UserInfo rdDateReg
         * @property {string|null} [rdPhoto] UserInfo rdPhoto
         * @property {string|null} [rdStatus] UserInfo rdStatus
         * @property {number|null} [rdBorrowQty] UserInfo rdBorrowQty
         * @property {string|null} [rdPwd] UserInfo rdPwd
         * @property {number|null} [rdAdminRoles] UserInfo rdAdminRoles
         */

        /**
         * Constructs a new UserInfo.
         * @memberof comm
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {comm.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo rdID.
         * @member {number|null|undefined} rdID
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdID = null;

        /**
         * UserInfo rdName.
         * @member {string|null|undefined} rdName
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdName = null;

        /**
         * UserInfo rdSex.
         * @member {comm.UserInfo.Sex|null|undefined} rdSex
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdSex = null;

        /**
         * UserInfo rdType.
         * @member {comm.UserInfo.rdTypes|null|undefined} rdType
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdType = null;

        /**
         * UserInfo rdDept.
         * @member {string|null|undefined} rdDept
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdDept = null;

        /**
         * UserInfo rdPhone.
         * @member {string|null|undefined} rdPhone
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdPhone = null;

        /**
         * UserInfo rdEmail.
         * @member {string|null|undefined} rdEmail
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdEmail = null;

        /**
         * UserInfo rdDateReg.
         * @member {string|null|undefined} rdDateReg
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdDateReg = null;

        /**
         * UserInfo rdPhoto.
         * @member {string|null|undefined} rdPhoto
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdPhoto = null;

        /**
         * UserInfo rdStatus.
         * @member {string|null|undefined} rdStatus
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdStatus = null;

        /**
         * UserInfo rdBorrowQty.
         * @member {number|null|undefined} rdBorrowQty
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdBorrowQty = null;

        /**
         * UserInfo rdPwd.
         * @member {string|null|undefined} rdPwd
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdPwd = null;

        /**
         * UserInfo rdAdminRoles.
         * @member {number|null|undefined} rdAdminRoles
         * @memberof comm.UserInfo
         * @instance
         */
        UserInfo.prototype.rdAdminRoles = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * UserInfo _rdID.
         * @member {"rdID"|undefined} _rdID
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdID", {
            get: $util.oneOfGetter($oneOfFields = ["rdID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdName.
         * @member {"rdName"|undefined} _rdName
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdName", {
            get: $util.oneOfGetter($oneOfFields = ["rdName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdSex.
         * @member {"rdSex"|undefined} _rdSex
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdSex", {
            get: $util.oneOfGetter($oneOfFields = ["rdSex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdType.
         * @member {"rdType"|undefined} _rdType
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdType", {
            get: $util.oneOfGetter($oneOfFields = ["rdType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdDept.
         * @member {"rdDept"|undefined} _rdDept
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdDept", {
            get: $util.oneOfGetter($oneOfFields = ["rdDept"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdPhone.
         * @member {"rdPhone"|undefined} _rdPhone
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdPhone", {
            get: $util.oneOfGetter($oneOfFields = ["rdPhone"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdEmail.
         * @member {"rdEmail"|undefined} _rdEmail
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdEmail", {
            get: $util.oneOfGetter($oneOfFields = ["rdEmail"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdDateReg.
         * @member {"rdDateReg"|undefined} _rdDateReg
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdDateReg", {
            get: $util.oneOfGetter($oneOfFields = ["rdDateReg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdPhoto.
         * @member {"rdPhoto"|undefined} _rdPhoto
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdPhoto", {
            get: $util.oneOfGetter($oneOfFields = ["rdPhoto"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdStatus.
         * @member {"rdStatus"|undefined} _rdStatus
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdStatus", {
            get: $util.oneOfGetter($oneOfFields = ["rdStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdBorrowQty.
         * @member {"rdBorrowQty"|undefined} _rdBorrowQty
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdBorrowQty", {
            get: $util.oneOfGetter($oneOfFields = ["rdBorrowQty"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdPwd.
         * @member {"rdPwd"|undefined} _rdPwd
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdPwd", {
            get: $util.oneOfGetter($oneOfFields = ["rdPwd"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _rdAdminRoles.
         * @member {"rdAdminRoles"|undefined} _rdAdminRoles
         * @memberof comm.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_rdAdminRoles", {
            get: $util.oneOfGetter($oneOfFields = ["rdAdminRoles"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof comm.UserInfo
         * @static
         * @param {comm.IUserInfo=} [properties] Properties to set
         * @returns {comm.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link comm.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof comm.UserInfo
         * @static
         * @param {comm.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rdID != null && Object.hasOwnProperty.call(message, "rdID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rdID);
            if (message.rdName != null && Object.hasOwnProperty.call(message, "rdName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.rdName);
            if (message.rdSex != null && Object.hasOwnProperty.call(message, "rdSex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rdSex);
            if (message.rdType != null && Object.hasOwnProperty.call(message, "rdType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rdType);
            if (message.rdDept != null && Object.hasOwnProperty.call(message, "rdDept"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.rdDept);
            if (message.rdPhone != null && Object.hasOwnProperty.call(message, "rdPhone"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.rdPhone);
            if (message.rdEmail != null && Object.hasOwnProperty.call(message, "rdEmail"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.rdEmail);
            if (message.rdDateReg != null && Object.hasOwnProperty.call(message, "rdDateReg"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.rdDateReg);
            if (message.rdPhoto != null && Object.hasOwnProperty.call(message, "rdPhoto"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.rdPhoto);
            if (message.rdStatus != null && Object.hasOwnProperty.call(message, "rdStatus"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.rdStatus);
            if (message.rdBorrowQty != null && Object.hasOwnProperty.call(message, "rdBorrowQty"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.rdBorrowQty);
            if (message.rdPwd != null && Object.hasOwnProperty.call(message, "rdPwd"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.rdPwd);
            if (message.rdAdminRoles != null && Object.hasOwnProperty.call(message, "rdAdminRoles"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.rdAdminRoles);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link comm.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof comm.UserInfo
         * @static
         * @param {comm.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof comm.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {comm.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.comm.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rdID = reader.int32();
                    break;
                case 2:
                    message.rdName = reader.string();
                    break;
                case 3:
                    message.rdSex = reader.int32();
                    break;
                case 4:
                    message.rdType = reader.int32();
                    break;
                case 5:
                    message.rdDept = reader.string();
                    break;
                case 6:
                    message.rdPhone = reader.string();
                    break;
                case 7:
                    message.rdEmail = reader.string();
                    break;
                case 8:
                    message.rdDateReg = reader.string();
                    break;
                case 9:
                    message.rdPhoto = reader.string();
                    break;
                case 10:
                    message.rdStatus = reader.string();
                    break;
                case 11:
                    message.rdBorrowQty = reader.int32();
                    break;
                case 12:
                    message.rdPwd = reader.string();
                    break;
                case 13:
                    message.rdAdminRoles = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof comm.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {comm.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof comm.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.rdID != null && message.hasOwnProperty("rdID")) {
                properties._rdID = 1;
                if (!$util.isInteger(message.rdID))
                    return "rdID: integer expected";
            }
            if (message.rdName != null && message.hasOwnProperty("rdName")) {
                properties._rdName = 1;
                if (!$util.isString(message.rdName))
                    return "rdName: string expected";
            }
            if (message.rdSex != null && message.hasOwnProperty("rdSex")) {
                properties._rdSex = 1;
                switch (message.rdSex) {
                default:
                    return "rdSex: enum value expected";
                case 1:
                case 2:
                    break;
                }
            }
            if (message.rdType != null && message.hasOwnProperty("rdType")) {
                properties._rdType = 1;
                switch (message.rdType) {
                default:
                    return "rdType: enum value expected";
                case 1:
                case 2:
                    break;
                }
            }
            if (message.rdDept != null && message.hasOwnProperty("rdDept")) {
                properties._rdDept = 1;
                if (!$util.isString(message.rdDept))
                    return "rdDept: string expected";
            }
            if (message.rdPhone != null && message.hasOwnProperty("rdPhone")) {
                properties._rdPhone = 1;
                if (!$util.isString(message.rdPhone))
                    return "rdPhone: string expected";
            }
            if (message.rdEmail != null && message.hasOwnProperty("rdEmail")) {
                properties._rdEmail = 1;
                if (!$util.isString(message.rdEmail))
                    return "rdEmail: string expected";
            }
            if (message.rdDateReg != null && message.hasOwnProperty("rdDateReg")) {
                properties._rdDateReg = 1;
                if (!$util.isString(message.rdDateReg))
                    return "rdDateReg: string expected";
            }
            if (message.rdPhoto != null && message.hasOwnProperty("rdPhoto")) {
                properties._rdPhoto = 1;
                if (!$util.isString(message.rdPhoto))
                    return "rdPhoto: string expected";
            }
            if (message.rdStatus != null && message.hasOwnProperty("rdStatus")) {
                properties._rdStatus = 1;
                if (!$util.isString(message.rdStatus))
                    return "rdStatus: string expected";
            }
            if (message.rdBorrowQty != null && message.hasOwnProperty("rdBorrowQty")) {
                properties._rdBorrowQty = 1;
                if (!$util.isInteger(message.rdBorrowQty))
                    return "rdBorrowQty: integer expected";
            }
            if (message.rdPwd != null && message.hasOwnProperty("rdPwd")) {
                properties._rdPwd = 1;
                if (!$util.isString(message.rdPwd))
                    return "rdPwd: string expected";
            }
            if (message.rdAdminRoles != null && message.hasOwnProperty("rdAdminRoles")) {
                properties._rdAdminRoles = 1;
                if (!$util.isInteger(message.rdAdminRoles))
                    return "rdAdminRoles: integer expected";
            }
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof comm.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {comm.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.comm.UserInfo)
                return object;
            var message = new $root.comm.UserInfo();
            if (object.rdID != null)
                message.rdID = object.rdID | 0;
            if (object.rdName != null)
                message.rdName = String(object.rdName);
            switch (object.rdSex) {
            case "boy":
            case 1:
                message.rdSex = 1;
                break;
            case "girl":
            case 2:
                message.rdSex = 2;
                break;
            }
            switch (object.rdType) {
            case "teacher":
            case 1:
                message.rdType = 1;
                break;
            case "student":
            case 2:
                message.rdType = 2;
                break;
            }
            if (object.rdDept != null)
                message.rdDept = String(object.rdDept);
            if (object.rdPhone != null)
                message.rdPhone = String(object.rdPhone);
            if (object.rdEmail != null)
                message.rdEmail = String(object.rdEmail);
            if (object.rdDateReg != null)
                message.rdDateReg = String(object.rdDateReg);
            if (object.rdPhoto != null)
                message.rdPhoto = String(object.rdPhoto);
            if (object.rdStatus != null)
                message.rdStatus = String(object.rdStatus);
            if (object.rdBorrowQty != null)
                message.rdBorrowQty = object.rdBorrowQty | 0;
            if (object.rdPwd != null)
                message.rdPwd = String(object.rdPwd);
            if (object.rdAdminRoles != null)
                message.rdAdminRoles = object.rdAdminRoles | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof comm.UserInfo
         * @static
         * @param {comm.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.rdID != null && message.hasOwnProperty("rdID")) {
                object.rdID = message.rdID;
                if (options.oneofs)
                    object._rdID = "rdID";
            }
            if (message.rdName != null && message.hasOwnProperty("rdName")) {
                object.rdName = message.rdName;
                if (options.oneofs)
                    object._rdName = "rdName";
            }
            if (message.rdSex != null && message.hasOwnProperty("rdSex")) {
                object.rdSex = options.enums === String ? $root.comm.UserInfo.Sex[message.rdSex] : message.rdSex;
                if (options.oneofs)
                    object._rdSex = "rdSex";
            }
            if (message.rdType != null && message.hasOwnProperty("rdType")) {
                object.rdType = options.enums === String ? $root.comm.UserInfo.rdTypes[message.rdType] : message.rdType;
                if (options.oneofs)
                    object._rdType = "rdType";
            }
            if (message.rdDept != null && message.hasOwnProperty("rdDept")) {
                object.rdDept = message.rdDept;
                if (options.oneofs)
                    object._rdDept = "rdDept";
            }
            if (message.rdPhone != null && message.hasOwnProperty("rdPhone")) {
                object.rdPhone = message.rdPhone;
                if (options.oneofs)
                    object._rdPhone = "rdPhone";
            }
            if (message.rdEmail != null && message.hasOwnProperty("rdEmail")) {
                object.rdEmail = message.rdEmail;
                if (options.oneofs)
                    object._rdEmail = "rdEmail";
            }
            if (message.rdDateReg != null && message.hasOwnProperty("rdDateReg")) {
                object.rdDateReg = message.rdDateReg;
                if (options.oneofs)
                    object._rdDateReg = "rdDateReg";
            }
            if (message.rdPhoto != null && message.hasOwnProperty("rdPhoto")) {
                object.rdPhoto = message.rdPhoto;
                if (options.oneofs)
                    object._rdPhoto = "rdPhoto";
            }
            if (message.rdStatus != null && message.hasOwnProperty("rdStatus")) {
                object.rdStatus = message.rdStatus;
                if (options.oneofs)
                    object._rdStatus = "rdStatus";
            }
            if (message.rdBorrowQty != null && message.hasOwnProperty("rdBorrowQty")) {
                object.rdBorrowQty = message.rdBorrowQty;
                if (options.oneofs)
                    object._rdBorrowQty = "rdBorrowQty";
            }
            if (message.rdPwd != null && message.hasOwnProperty("rdPwd")) {
                object.rdPwd = message.rdPwd;
                if (options.oneofs)
                    object._rdPwd = "rdPwd";
            }
            if (message.rdAdminRoles != null && message.hasOwnProperty("rdAdminRoles")) {
                object.rdAdminRoles = message.rdAdminRoles;
                if (options.oneofs)
                    object._rdAdminRoles = "rdAdminRoles";
            }
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof comm.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Sex enum.
         * @name comm.UserInfo.Sex
         * @enum {number}
         * @property {number} boy=1 boy value
         * @property {number} girl=2 girl value
         */
        UserInfo.Sex = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "boy"] = 1;
            values[valuesById[2] = "girl"] = 2;
            return values;
        })();

        /**
         * rdTypes enum.
         * @name comm.UserInfo.rdTypes
         * @enum {number}
         * @property {number} teacher=1 teacher value
         * @property {number} student=2 student value
         */
        UserInfo.rdTypes = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "teacher"] = 1;
            values[valuesById[2] = "student"] = 2;
            return values;
        })();

        return UserInfo;
    })();

    return comm;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof user
         * @interface ILoginReq
         * @property {string} username LoginReq username
         * @property {string} passowrd LoginReq passowrd
         */

        /**
         * Constructs a new LoginReq.
         * @memberof user
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {user.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq username.
         * @member {string} username
         * @memberof user.LoginReq
         * @instance
         */
        LoginReq.prototype.username = "";

        /**
         * LoginReq passowrd.
         * @member {string} passowrd
         * @memberof user.LoginReq
         * @instance
         */
        LoginReq.prototype.passowrd = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof user.LoginReq
         * @static
         * @param {user.ILoginReq=} [properties] Properties to set
         * @returns {user.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link user.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof user.LoginReq
         * @static
         * @param {user.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.passowrd);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link user.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginReq
         * @static
         * @param {user.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.passowrd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("username"))
                throw $util.ProtocolError("missing required 'username'", { instance: message });
            if (!message.hasOwnProperty("passowrd"))
                throw $util.ProtocolError("missing required 'passowrd'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof user.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.username))
                return "username: string expected";
            if (!$util.isString(message.passowrd))
                return "passowrd: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginReq)
                return object;
            var message = new $root.user.LoginReq();
            if (object.username != null)
                message.username = String(object.username);
            if (object.passowrd != null)
                message.passowrd = String(object.passowrd);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginReq
         * @static
         * @param {user.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.passowrd = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.passowrd != null && message.hasOwnProperty("passowrd"))
                object.passowrd = message.passowrd;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof user.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    user.LoginRsp = (function() {

        /**
         * Properties of a LoginRsp.
         * @memberof user
         * @interface ILoginRsp
         * @property {comm.IUserInfo} userinfo LoginRsp userinfo
         */

        /**
         * Constructs a new LoginRsp.
         * @memberof user
         * @classdesc Represents a LoginRsp.
         * @implements ILoginRsp
         * @constructor
         * @param {user.ILoginRsp=} [properties] Properties to set
         */
        function LoginRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRsp userinfo.
         * @member {comm.IUserInfo} userinfo
         * @memberof user.LoginRsp
         * @instance
         */
        LoginRsp.prototype.userinfo = null;

        /**
         * Creates a new LoginRsp instance using the specified properties.
         * @function create
         * @memberof user.LoginRsp
         * @static
         * @param {user.ILoginRsp=} [properties] Properties to set
         * @returns {user.LoginRsp} LoginRsp instance
         */
        LoginRsp.create = function create(properties) {
            return new LoginRsp(properties);
        };

        /**
         * Encodes the specified LoginRsp message. Does not implicitly {@link user.LoginRsp.verify|verify} messages.
         * @function encode
         * @memberof user.LoginRsp
         * @static
         * @param {user.ILoginRsp} message LoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.comm.UserInfo.encode(message.userinfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginRsp message, length delimited. Does not implicitly {@link user.LoginRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginRsp
         * @static
         * @param {user.ILoginRsp} message LoginRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRsp message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginRsp} LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userinfo = $root.comm.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userinfo"))
                throw $util.ProtocolError("missing required 'userinfo'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginRsp} LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRsp message.
         * @function verify
         * @memberof user.LoginRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.comm.UserInfo.verify(message.userinfo);
                if (error)
                    return "userinfo." + error;
            }
            return null;
        };

        /**
         * Creates a LoginRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginRsp} LoginRsp
         */
        LoginRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginRsp)
                return object;
            var message = new $root.user.LoginRsp();
            if (object.userinfo != null) {
                if (typeof object.userinfo !== "object")
                    throw TypeError(".user.LoginRsp.userinfo: object expected");
                message.userinfo = $root.comm.UserInfo.fromObject(object.userinfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginRsp
         * @static
         * @param {user.LoginRsp} message LoginRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userinfo = null;
            if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                object.userinfo = $root.comm.UserInfo.toObject(message.userinfo, options);
            return object;
        };

        /**
         * Converts this LoginRsp to JSON.
         * @function toJSON
         * @memberof user.LoginRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRsp;
    })();

    user.registerUserReq = (function() {

        /**
         * Properties of a registerUserReq.
         * @memberof user
         * @interface IregisterUserReq
         * @property {string} rdName registerUserReq rdName
         * @property {comm.UserInfo.Sex} rdSex registerUserReq rdSex
         * @property {string} rdPhone registerUserReq rdPhone
         * @property {string} rdPwd registerUserReq rdPwd
         * @property {string} rdAdminRoles registerUserReq rdAdminRoles
         * @property {comm.UserInfo.rdTypes} rdType registerUserReq rdType
         * @property {string|null} [rdDept] registerUserReq rdDept
         * @property {string|null} [rdEmail] registerUserReq rdEmail
         * @property {string|null} [rdPhoto] registerUserReq rdPhoto
         */

        /**
         * Constructs a new registerUserReq.
         * @memberof user
         * @classdesc Represents a registerUserReq.
         * @implements IregisterUserReq
         * @constructor
         * @param {user.IregisterUserReq=} [properties] Properties to set
         */
        function registerUserReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * registerUserReq rdName.
         * @member {string} rdName
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdName = "";

        /**
         * registerUserReq rdSex.
         * @member {comm.UserInfo.Sex} rdSex
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdSex = 1;

        /**
         * registerUserReq rdPhone.
         * @member {string} rdPhone
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdPhone = "";

        /**
         * registerUserReq rdPwd.
         * @member {string} rdPwd
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdPwd = "";

        /**
         * registerUserReq rdAdminRoles.
         * @member {string} rdAdminRoles
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdAdminRoles = "";

        /**
         * registerUserReq rdType.
         * @member {comm.UserInfo.rdTypes} rdType
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdType = 2;

        /**
         * registerUserReq rdDept.
         * @member {string|null|undefined} rdDept
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdDept = null;

        /**
         * registerUserReq rdEmail.
         * @member {string|null|undefined} rdEmail
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdEmail = null;

        /**
         * registerUserReq rdPhoto.
         * @member {string|null|undefined} rdPhoto
         * @memberof user.registerUserReq
         * @instance
         */
        registerUserReq.prototype.rdPhoto = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * registerUserReq _rdDept.
         * @member {"rdDept"|undefined} _rdDept
         * @memberof user.registerUserReq
         * @instance
         */
        Object.defineProperty(registerUserReq.prototype, "_rdDept", {
            get: $util.oneOfGetter($oneOfFields = ["rdDept"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * registerUserReq _rdEmail.
         * @member {"rdEmail"|undefined} _rdEmail
         * @memberof user.registerUserReq
         * @instance
         */
        Object.defineProperty(registerUserReq.prototype, "_rdEmail", {
            get: $util.oneOfGetter($oneOfFields = ["rdEmail"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * registerUserReq _rdPhoto.
         * @member {"rdPhoto"|undefined} _rdPhoto
         * @memberof user.registerUserReq
         * @instance
         */
        Object.defineProperty(registerUserReq.prototype, "_rdPhoto", {
            get: $util.oneOfGetter($oneOfFields = ["rdPhoto"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new registerUserReq instance using the specified properties.
         * @function create
         * @memberof user.registerUserReq
         * @static
         * @param {user.IregisterUserReq=} [properties] Properties to set
         * @returns {user.registerUserReq} registerUserReq instance
         */
        registerUserReq.create = function create(properties) {
            return new registerUserReq(properties);
        };

        /**
         * Encodes the specified registerUserReq message. Does not implicitly {@link user.registerUserReq.verify|verify} messages.
         * @function encode
         * @memberof user.registerUserReq
         * @static
         * @param {user.IregisterUserReq} message registerUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        registerUserReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.rdName);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rdSex);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.rdPhone);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.rdPwd);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.rdAdminRoles);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.rdType);
            if (message.rdDept != null && Object.hasOwnProperty.call(message, "rdDept"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.rdDept);
            if (message.rdEmail != null && Object.hasOwnProperty.call(message, "rdEmail"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.rdEmail);
            if (message.rdPhoto != null && Object.hasOwnProperty.call(message, "rdPhoto"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.rdPhoto);
            return writer;
        };

        /**
         * Encodes the specified registerUserReq message, length delimited. Does not implicitly {@link user.registerUserReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.registerUserReq
         * @static
         * @param {user.IregisterUserReq} message registerUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        registerUserReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a registerUserReq message from the specified reader or buffer.
         * @function decode
         * @memberof user.registerUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.registerUserReq} registerUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        registerUserReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.registerUserReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rdName = reader.string();
                    break;
                case 2:
                    message.rdSex = reader.int32();
                    break;
                case 3:
                    message.rdPhone = reader.string();
                    break;
                case 4:
                    message.rdPwd = reader.string();
                    break;
                case 5:
                    message.rdAdminRoles = reader.string();
                    break;
                case 6:
                    message.rdType = reader.int32();
                    break;
                case 7:
                    message.rdDept = reader.string();
                    break;
                case 8:
                    message.rdEmail = reader.string();
                    break;
                case 9:
                    message.rdPhoto = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("rdName"))
                throw $util.ProtocolError("missing required 'rdName'", { instance: message });
            if (!message.hasOwnProperty("rdSex"))
                throw $util.ProtocolError("missing required 'rdSex'", { instance: message });
            if (!message.hasOwnProperty("rdPhone"))
                throw $util.ProtocolError("missing required 'rdPhone'", { instance: message });
            if (!message.hasOwnProperty("rdPwd"))
                throw $util.ProtocolError("missing required 'rdPwd'", { instance: message });
            if (!message.hasOwnProperty("rdAdminRoles"))
                throw $util.ProtocolError("missing required 'rdAdminRoles'", { instance: message });
            if (!message.hasOwnProperty("rdType"))
                throw $util.ProtocolError("missing required 'rdType'", { instance: message });
            return message;
        };

        /**
         * Decodes a registerUserReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.registerUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.registerUserReq} registerUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        registerUserReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a registerUserReq message.
         * @function verify
         * @memberof user.registerUserReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        registerUserReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (!$util.isString(message.rdName))
                return "rdName: string expected";
            switch (message.rdSex) {
            default:
                return "rdSex: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (!$util.isString(message.rdPhone))
                return "rdPhone: string expected";
            if (!$util.isString(message.rdPwd))
                return "rdPwd: string expected";
            if (!$util.isString(message.rdAdminRoles))
                return "rdAdminRoles: string expected";
            switch (message.rdType) {
            default:
                return "rdType: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (message.rdDept != null && message.hasOwnProperty("rdDept")) {
                properties._rdDept = 1;
                if (!$util.isString(message.rdDept))
                    return "rdDept: string expected";
            }
            if (message.rdEmail != null && message.hasOwnProperty("rdEmail")) {
                properties._rdEmail = 1;
                if (!$util.isString(message.rdEmail))
                    return "rdEmail: string expected";
            }
            if (message.rdPhoto != null && message.hasOwnProperty("rdPhoto")) {
                properties._rdPhoto = 1;
                if (!$util.isString(message.rdPhoto))
                    return "rdPhoto: string expected";
            }
            return null;
        };

        /**
         * Creates a registerUserReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.registerUserReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.registerUserReq} registerUserReq
         */
        registerUserReq.fromObject = function fromObject(object) {
            if (object instanceof $root.user.registerUserReq)
                return object;
            var message = new $root.user.registerUserReq();
            if (object.rdName != null)
                message.rdName = String(object.rdName);
            switch (object.rdSex) {
            case "boy":
            case 1:
                message.rdSex = 1;
                break;
            case "girl":
            case 2:
                message.rdSex = 2;
                break;
            }
            if (object.rdPhone != null)
                message.rdPhone = String(object.rdPhone);
            if (object.rdPwd != null)
                message.rdPwd = String(object.rdPwd);
            if (object.rdAdminRoles != null)
                message.rdAdminRoles = String(object.rdAdminRoles);
            switch (object.rdType) {
            case "teacher":
            case 1:
                message.rdType = 1;
                break;
            case "student":
            case 2:
                message.rdType = 2;
                break;
            }
            if (object.rdDept != null)
                message.rdDept = String(object.rdDept);
            if (object.rdEmail != null)
                message.rdEmail = String(object.rdEmail);
            if (object.rdPhoto != null)
                message.rdPhoto = String(object.rdPhoto);
            return message;
        };

        /**
         * Creates a plain object from a registerUserReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.registerUserReq
         * @static
         * @param {user.registerUserReq} message registerUserReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        registerUserReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rdName = "";
                object.rdSex = options.enums === String ? "boy" : 1;
                object.rdPhone = "";
                object.rdPwd = "";
                object.rdAdminRoles = "";
                object.rdType = options.enums === String ? "student" : 2;
            }
            if (message.rdName != null && message.hasOwnProperty("rdName"))
                object.rdName = message.rdName;
            if (message.rdSex != null && message.hasOwnProperty("rdSex"))
                object.rdSex = options.enums === String ? $root.comm.UserInfo.Sex[message.rdSex] : message.rdSex;
            if (message.rdPhone != null && message.hasOwnProperty("rdPhone"))
                object.rdPhone = message.rdPhone;
            if (message.rdPwd != null && message.hasOwnProperty("rdPwd"))
                object.rdPwd = message.rdPwd;
            if (message.rdAdminRoles != null && message.hasOwnProperty("rdAdminRoles"))
                object.rdAdminRoles = message.rdAdminRoles;
            if (message.rdType != null && message.hasOwnProperty("rdType"))
                object.rdType = options.enums === String ? $root.comm.UserInfo.rdTypes[message.rdType] : message.rdType;
            if (message.rdDept != null && message.hasOwnProperty("rdDept")) {
                object.rdDept = message.rdDept;
                if (options.oneofs)
                    object._rdDept = "rdDept";
            }
            if (message.rdEmail != null && message.hasOwnProperty("rdEmail")) {
                object.rdEmail = message.rdEmail;
                if (options.oneofs)
                    object._rdEmail = "rdEmail";
            }
            if (message.rdPhoto != null && message.hasOwnProperty("rdPhoto")) {
                object.rdPhoto = message.rdPhoto;
                if (options.oneofs)
                    object._rdPhoto = "rdPhoto";
            }
            return object;
        };

        /**
         * Converts this registerUserReq to JSON.
         * @function toJSON
         * @memberof user.registerUserReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        registerUserReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return registerUserReq;
    })();

    user.userBaseRsp = (function() {

        /**
         * Properties of a userBaseRsp.
         * @memberof user
         * @interface IuserBaseRsp
         * @property {number} code userBaseRsp code
         * @property {string} msg userBaseRsp msg
         * @property {comm.IUserInfo} data userBaseRsp data
         */

        /**
         * Constructs a new userBaseRsp.
         * @memberof user
         * @classdesc Represents a userBaseRsp.
         * @implements IuserBaseRsp
         * @constructor
         * @param {user.IuserBaseRsp=} [properties] Properties to set
         */
        function userBaseRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * userBaseRsp code.
         * @member {number} code
         * @memberof user.userBaseRsp
         * @instance
         */
        userBaseRsp.prototype.code = 0;

        /**
         * userBaseRsp msg.
         * @member {string} msg
         * @memberof user.userBaseRsp
         * @instance
         */
        userBaseRsp.prototype.msg = "";

        /**
         * userBaseRsp data.
         * @member {comm.IUserInfo} data
         * @memberof user.userBaseRsp
         * @instance
         */
        userBaseRsp.prototype.data = null;

        /**
         * Creates a new userBaseRsp instance using the specified properties.
         * @function create
         * @memberof user.userBaseRsp
         * @static
         * @param {user.IuserBaseRsp=} [properties] Properties to set
         * @returns {user.userBaseRsp} userBaseRsp instance
         */
        userBaseRsp.create = function create(properties) {
            return new userBaseRsp(properties);
        };

        /**
         * Encodes the specified userBaseRsp message. Does not implicitly {@link user.userBaseRsp.verify|verify} messages.
         * @function encode
         * @memberof user.userBaseRsp
         * @static
         * @param {user.IuserBaseRsp} message userBaseRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userBaseRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            $root.comm.UserInfo.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified userBaseRsp message, length delimited. Does not implicitly {@link user.userBaseRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.userBaseRsp
         * @static
         * @param {user.IuserBaseRsp} message userBaseRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userBaseRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a userBaseRsp message from the specified reader or buffer.
         * @function decode
         * @memberof user.userBaseRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.userBaseRsp} userBaseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userBaseRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.userBaseRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.data = $root.comm.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            if (!message.hasOwnProperty("msg"))
                throw $util.ProtocolError("missing required 'msg'", { instance: message });
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a userBaseRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.userBaseRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.userBaseRsp} userBaseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userBaseRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a userBaseRsp message.
         * @function verify
         * @memberof user.userBaseRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        userBaseRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (!$util.isString(message.msg))
                return "msg: string expected";
            {
                var error = $root.comm.UserInfo.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a userBaseRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.userBaseRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.userBaseRsp} userBaseRsp
         */
        userBaseRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.user.userBaseRsp)
                return object;
            var message = new $root.user.userBaseRsp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".user.userBaseRsp.data: object expected");
                message.data = $root.comm.UserInfo.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a userBaseRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.userBaseRsp
         * @static
         * @param {user.userBaseRsp} message userBaseRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        userBaseRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.data = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.comm.UserInfo.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this userBaseRsp to JSON.
         * @function toJSON
         * @memberof user.userBaseRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        userBaseRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return userBaseRsp;
    })();

    user.queryUserByIdReq = (function() {

        /**
         * Properties of a queryUserByIdReq.
         * @memberof user
         * @interface IqueryUserByIdReq
         * @property {number} rdID queryUserByIdReq rdID
         */

        /**
         * Constructs a new queryUserByIdReq.
         * @memberof user
         * @classdesc Represents a queryUserByIdReq.
         * @implements IqueryUserByIdReq
         * @constructor
         * @param {user.IqueryUserByIdReq=} [properties] Properties to set
         */
        function queryUserByIdReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * queryUserByIdReq rdID.
         * @member {number} rdID
         * @memberof user.queryUserByIdReq
         * @instance
         */
        queryUserByIdReq.prototype.rdID = 0;

        /**
         * Creates a new queryUserByIdReq instance using the specified properties.
         * @function create
         * @memberof user.queryUserByIdReq
         * @static
         * @param {user.IqueryUserByIdReq=} [properties] Properties to set
         * @returns {user.queryUserByIdReq} queryUserByIdReq instance
         */
        queryUserByIdReq.create = function create(properties) {
            return new queryUserByIdReq(properties);
        };

        /**
         * Encodes the specified queryUserByIdReq message. Does not implicitly {@link user.queryUserByIdReq.verify|verify} messages.
         * @function encode
         * @memberof user.queryUserByIdReq
         * @static
         * @param {user.IqueryUserByIdReq} message queryUserByIdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        queryUserByIdReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rdID);
            return writer;
        };

        /**
         * Encodes the specified queryUserByIdReq message, length delimited. Does not implicitly {@link user.queryUserByIdReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.queryUserByIdReq
         * @static
         * @param {user.IqueryUserByIdReq} message queryUserByIdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        queryUserByIdReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a queryUserByIdReq message from the specified reader or buffer.
         * @function decode
         * @memberof user.queryUserByIdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.queryUserByIdReq} queryUserByIdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        queryUserByIdReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.queryUserByIdReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rdID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("rdID"))
                throw $util.ProtocolError("missing required 'rdID'", { instance: message });
            return message;
        };

        /**
         * Decodes a queryUserByIdReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.queryUserByIdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.queryUserByIdReq} queryUserByIdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        queryUserByIdReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a queryUserByIdReq message.
         * @function verify
         * @memberof user.queryUserByIdReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        queryUserByIdReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.rdID))
                return "rdID: integer expected";
            return null;
        };

        /**
         * Creates a queryUserByIdReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.queryUserByIdReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.queryUserByIdReq} queryUserByIdReq
         */
        queryUserByIdReq.fromObject = function fromObject(object) {
            if (object instanceof $root.user.queryUserByIdReq)
                return object;
            var message = new $root.user.queryUserByIdReq();
            if (object.rdID != null)
                message.rdID = object.rdID | 0;
            return message;
        };

        /**
         * Creates a plain object from a queryUserByIdReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.queryUserByIdReq
         * @static
         * @param {user.queryUserByIdReq} message queryUserByIdReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        queryUserByIdReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.rdID = 0;
            if (message.rdID != null && message.hasOwnProperty("rdID"))
                object.rdID = message.rdID;
            return object;
        };

        /**
         * Converts this queryUserByIdReq to JSON.
         * @function toJSON
         * @memberof user.queryUserByIdReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        queryUserByIdReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return queryUserByIdReq;
    })();

    return user;
})();

module.exports = $root;
