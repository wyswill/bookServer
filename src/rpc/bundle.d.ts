import * as $protobuf from "protobufjs";
/** Namespace book. */
export namespace book {

    /** Represents a book_service */
    class book_service extends $protobuf.rpc.Service {

        /**
         * Constructs a new book_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new book_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): book_service;

        /**
         * Calls login.
         * @param request LoginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginRsp
         */
        public login(request: user.ILoginReq, callback: book.book_service.loginCallback): void;

        /**
         * Calls login.
         * @param request LoginReq message or plain object
         * @returns Promise
         */
        public login(request: user.ILoginReq): Promise<user.LoginRsp>;

        /**
         * Calls registerUser.
         * @param request registerUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and userBaseRsp
         */
        public registerUser(request: user.IregisterUserReq, callback: book.book_service.registerUserCallback): void;

        /**
         * Calls registerUser.
         * @param request registerUserReq message or plain object
         * @returns Promise
         */
        public registerUser(request: user.IregisterUserReq): Promise<user.userBaseRsp>;

        /**
         * Calls queryUserById.
         * @param request queryUserByIdReq message or plain object
         * @param callback Node-style callback called with the error, if any, and userBaseRsp
         */
        public queryUserById(request: user.IqueryUserByIdReq, callback: book.book_service.queryUserByIdCallback): void;

        /**
         * Calls queryUserById.
         * @param request queryUserByIdReq message or plain object
         * @returns Promise
         */
        public queryUserById(request: user.IqueryUserByIdReq): Promise<user.userBaseRsp>;
    }

    namespace book_service {

        /**
         * Callback as used by {@link book.book_service#login}.
         * @param error Error, if any
         * @param [response] LoginRsp
         */
        type loginCallback = (error: (Error|null), response?: user.LoginRsp) => void;

        /**
         * Callback as used by {@link book.book_service#registerUser}.
         * @param error Error, if any
         * @param [response] userBaseRsp
         */
        type registerUserCallback = (error: (Error|null), response?: user.userBaseRsp) => void;

        /**
         * Callback as used by {@link book.book_service#queryUserById}.
         * @param error Error, if any
         * @param [response] userBaseRsp
         */
        type queryUserByIdCallback = (error: (Error|null), response?: user.userBaseRsp) => void;
    }
}

/** Namespace comm. */
export namespace comm {

    /** Properties of a baseRsp. */
    interface IbaseRsp {

        /** baseRsp code */
        code: number;

        /** baseRsp msg */
        msg: string;
    }

    /** Represents a baseRsp. */
    class baseRsp implements IbaseRsp {

        /**
         * Constructs a new baseRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: comm.IbaseRsp);

        /** baseRsp code. */
        public code: number;

        /** baseRsp msg. */
        public msg: string;

        /**
         * Creates a new baseRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns baseRsp instance
         */
        public static create(properties?: comm.IbaseRsp): comm.baseRsp;

        /**
         * Encodes the specified baseRsp message. Does not implicitly {@link comm.baseRsp.verify|verify} messages.
         * @param message baseRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: comm.IbaseRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified baseRsp message, length delimited. Does not implicitly {@link comm.baseRsp.verify|verify} messages.
         * @param message baseRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: comm.IbaseRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a baseRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns baseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): comm.baseRsp;

        /**
         * Decodes a baseRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns baseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): comm.baseRsp;

        /**
         * Verifies a baseRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a baseRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns baseRsp
         */
        public static fromObject(object: { [k: string]: any }): comm.baseRsp;

        /**
         * Creates a plain object from a baseRsp message. Also converts values to other types if specified.
         * @param message baseRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: comm.baseRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this baseRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo rdID */
        rdID?: (number|null);

        /** UserInfo rdName */
        rdName?: (string|null);

        /** UserInfo rdSex */
        rdSex?: (comm.UserInfo.Sex|null);

        /** UserInfo rdType */
        rdType?: (comm.UserInfo.rdTypes|null);

        /** UserInfo rdDept */
        rdDept?: (string|null);

        /** UserInfo rdPhone */
        rdPhone?: (string|null);

        /** UserInfo rdEmail */
        rdEmail?: (string|null);

        /** UserInfo rdDateReg */
        rdDateReg?: (string|null);

        /** UserInfo rdPhoto */
        rdPhoto?: (string|null);

        /** UserInfo rdStatus */
        rdStatus?: (string|null);

        /** UserInfo rdBorrowQty */
        rdBorrowQty?: (number|null);

        /** UserInfo rdPwd */
        rdPwd?: (string|null);

        /** UserInfo rdAdminRoles */
        rdAdminRoles?: (number|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: comm.IUserInfo);

        /** UserInfo rdID. */
        public rdID?: (number|null);

        /** UserInfo rdName. */
        public rdName?: (string|null);

        /** UserInfo rdSex. */
        public rdSex?: (comm.UserInfo.Sex|null);

        /** UserInfo rdType. */
        public rdType?: (comm.UserInfo.rdTypes|null);

        /** UserInfo rdDept. */
        public rdDept?: (string|null);

        /** UserInfo rdPhone. */
        public rdPhone?: (string|null);

        /** UserInfo rdEmail. */
        public rdEmail?: (string|null);

        /** UserInfo rdDateReg. */
        public rdDateReg?: (string|null);

        /** UserInfo rdPhoto. */
        public rdPhoto?: (string|null);

        /** UserInfo rdStatus. */
        public rdStatus?: (string|null);

        /** UserInfo rdBorrowQty. */
        public rdBorrowQty?: (number|null);

        /** UserInfo rdPwd. */
        public rdPwd?: (string|null);

        /** UserInfo rdAdminRoles. */
        public rdAdminRoles?: (number|null);

        /** UserInfo _rdID. */
        public _rdID?: "rdID";

        /** UserInfo _rdName. */
        public _rdName?: "rdName";

        /** UserInfo _rdSex. */
        public _rdSex?: "rdSex";

        /** UserInfo _rdType. */
        public _rdType?: "rdType";

        /** UserInfo _rdDept. */
        public _rdDept?: "rdDept";

        /** UserInfo _rdPhone. */
        public _rdPhone?: "rdPhone";

        /** UserInfo _rdEmail. */
        public _rdEmail?: "rdEmail";

        /** UserInfo _rdDateReg. */
        public _rdDateReg?: "rdDateReg";

        /** UserInfo _rdPhoto. */
        public _rdPhoto?: "rdPhoto";

        /** UserInfo _rdStatus. */
        public _rdStatus?: "rdStatus";

        /** UserInfo _rdBorrowQty. */
        public _rdBorrowQty?: "rdBorrowQty";

        /** UserInfo _rdPwd. */
        public _rdPwd?: "rdPwd";

        /** UserInfo _rdAdminRoles. */
        public _rdAdminRoles?: "rdAdminRoles";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: comm.IUserInfo): comm.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link comm.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: comm.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link comm.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: comm.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): comm.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): comm.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): comm.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: comm.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace UserInfo {

        /** Sex enum. */
        enum Sex {
            boy = 1,
            girl = 2
        }

        /** rdTypes enum. */
        enum rdTypes {
            teacher = 1,
            student = 2
        }
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq username */
        username: string;

        /** LoginReq passowrd */
        passowrd: string;
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginReq);

        /** LoginReq username. */
        public username: string;

        /** LoginReq passowrd. */
        public passowrd: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: user.ILoginReq): user.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link user.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link user.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): user.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRsp. */
    interface ILoginRsp {

        /** LoginRsp code */
        code: number;

        /** LoginRsp msg */
        msg: string;

        /** LoginRsp data */
        data: comm.IUserInfo;
    }

    /** Represents a LoginRsp. */
    class LoginRsp implements ILoginRsp {

        /**
         * Constructs a new LoginRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginRsp);

        /** LoginRsp code. */
        public code: number;

        /** LoginRsp msg. */
        public msg: string;

        /** LoginRsp data. */
        public data: comm.IUserInfo;

        /**
         * Creates a new LoginRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRsp instance
         */
        public static create(properties?: user.ILoginRsp): user.LoginRsp;

        /**
         * Encodes the specified LoginRsp message. Does not implicitly {@link user.LoginRsp.verify|verify} messages.
         * @param message LoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRsp message, length delimited. Does not implicitly {@link user.LoginRsp.verify|verify} messages.
         * @param message LoginRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginRsp;

        /**
         * Decodes a LoginRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginRsp;

        /**
         * Verifies a LoginRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRsp
         */
        public static fromObject(object: { [k: string]: any }): user.LoginRsp;

        /**
         * Creates a plain object from a LoginRsp message. Also converts values to other types if specified.
         * @param message LoginRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a registerUserReq. */
    interface IregisterUserReq {

        /** registerUserReq rdName */
        rdName: string;

        /** registerUserReq rdSex */
        rdSex: comm.UserInfo.Sex;

        /** registerUserReq rdPhone */
        rdPhone: string;

        /** registerUserReq rdPwd */
        rdPwd: string;

        /** registerUserReq rdAdminRoles */
        rdAdminRoles: string;

        /** registerUserReq rdType */
        rdType: comm.UserInfo.rdTypes;

        /** registerUserReq rdDept */
        rdDept?: (string|null);

        /** registerUserReq rdEmail */
        rdEmail?: (string|null);

        /** registerUserReq rdPhoto */
        rdPhoto?: (string|null);
    }

    /** Represents a registerUserReq. */
    class registerUserReq implements IregisterUserReq {

        /**
         * Constructs a new registerUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IregisterUserReq);

        /** registerUserReq rdName. */
        public rdName: string;

        /** registerUserReq rdSex. */
        public rdSex: comm.UserInfo.Sex;

        /** registerUserReq rdPhone. */
        public rdPhone: string;

        /** registerUserReq rdPwd. */
        public rdPwd: string;

        /** registerUserReq rdAdminRoles. */
        public rdAdminRoles: string;

        /** registerUserReq rdType. */
        public rdType: comm.UserInfo.rdTypes;

        /** registerUserReq rdDept. */
        public rdDept?: (string|null);

        /** registerUserReq rdEmail. */
        public rdEmail?: (string|null);

        /** registerUserReq rdPhoto. */
        public rdPhoto?: (string|null);

        /** registerUserReq _rdDept. */
        public _rdDept?: "rdDept";

        /** registerUserReq _rdEmail. */
        public _rdEmail?: "rdEmail";

        /** registerUserReq _rdPhoto. */
        public _rdPhoto?: "rdPhoto";

        /**
         * Creates a new registerUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns registerUserReq instance
         */
        public static create(properties?: user.IregisterUserReq): user.registerUserReq;

        /**
         * Encodes the specified registerUserReq message. Does not implicitly {@link user.registerUserReq.verify|verify} messages.
         * @param message registerUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IregisterUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified registerUserReq message, length delimited. Does not implicitly {@link user.registerUserReq.verify|verify} messages.
         * @param message registerUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IregisterUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a registerUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns registerUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.registerUserReq;

        /**
         * Decodes a registerUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns registerUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.registerUserReq;

        /**
         * Verifies a registerUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a registerUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns registerUserReq
         */
        public static fromObject(object: { [k: string]: any }): user.registerUserReq;

        /**
         * Creates a plain object from a registerUserReq message. Also converts values to other types if specified.
         * @param message registerUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.registerUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this registerUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a userBaseRsp. */
    interface IuserBaseRsp {

        /** userBaseRsp code */
        code: number;

        /** userBaseRsp msg */
        msg: string;

        /** userBaseRsp data */
        data: comm.IUserInfo;
    }

    /** Represents a userBaseRsp. */
    class userBaseRsp implements IuserBaseRsp {

        /**
         * Constructs a new userBaseRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IuserBaseRsp);

        /** userBaseRsp code. */
        public code: number;

        /** userBaseRsp msg. */
        public msg: string;

        /** userBaseRsp data. */
        public data: comm.IUserInfo;

        /**
         * Creates a new userBaseRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns userBaseRsp instance
         */
        public static create(properties?: user.IuserBaseRsp): user.userBaseRsp;

        /**
         * Encodes the specified userBaseRsp message. Does not implicitly {@link user.userBaseRsp.verify|verify} messages.
         * @param message userBaseRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IuserBaseRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified userBaseRsp message, length delimited. Does not implicitly {@link user.userBaseRsp.verify|verify} messages.
         * @param message userBaseRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IuserBaseRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a userBaseRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns userBaseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.userBaseRsp;

        /**
         * Decodes a userBaseRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns userBaseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.userBaseRsp;

        /**
         * Verifies a userBaseRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a userBaseRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns userBaseRsp
         */
        public static fromObject(object: { [k: string]: any }): user.userBaseRsp;

        /**
         * Creates a plain object from a userBaseRsp message. Also converts values to other types if specified.
         * @param message userBaseRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.userBaseRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this userBaseRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a queryUserByIdReq. */
    interface IqueryUserByIdReq {

        /** queryUserByIdReq rdID */
        rdID: number;
    }

    /** Represents a queryUserByIdReq. */
    class queryUserByIdReq implements IqueryUserByIdReq {

        /**
         * Constructs a new queryUserByIdReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IqueryUserByIdReq);

        /** queryUserByIdReq rdID. */
        public rdID: number;

        /**
         * Creates a new queryUserByIdReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns queryUserByIdReq instance
         */
        public static create(properties?: user.IqueryUserByIdReq): user.queryUserByIdReq;

        /**
         * Encodes the specified queryUserByIdReq message. Does not implicitly {@link user.queryUserByIdReq.verify|verify} messages.
         * @param message queryUserByIdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IqueryUserByIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified queryUserByIdReq message, length delimited. Does not implicitly {@link user.queryUserByIdReq.verify|verify} messages.
         * @param message queryUserByIdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IqueryUserByIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a queryUserByIdReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns queryUserByIdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.queryUserByIdReq;

        /**
         * Decodes a queryUserByIdReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns queryUserByIdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.queryUserByIdReq;

        /**
         * Verifies a queryUserByIdReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a queryUserByIdReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns queryUserByIdReq
         */
        public static fromObject(object: { [k: string]: any }): user.queryUserByIdReq;

        /**
         * Creates a plain object from a queryUserByIdReq message. Also converts values to other types if specified.
         * @param message queryUserByIdReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.queryUserByIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this queryUserByIdReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
