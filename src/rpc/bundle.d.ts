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

        /**
         * Calls addUserInfo.
         * @param request UserInfo message or plain object
         * @param callback Node-style callback called with the error, if any, and addUserInfoRsp
         */
        public addUserInfo(request: comm.IUserInfo, callback: book.book_service.addUserInfoCallback): void;

        /**
         * Calls addUserInfo.
         * @param request UserInfo message or plain object
         * @returns Promise
         */
        public addUserInfo(request: comm.IUserInfo): Promise<user.addUserInfoRsp>;

        /**
         * Calls removeUserById.
         * @param request queryUserByIdReq message or plain object
         * @param callback Node-style callback called with the error, if any, and removeUserByIdRsp
         */
        public removeUserById(request: user.IqueryUserByIdReq, callback: book.book_service.removeUserByIdCallback): void;

        /**
         * Calls removeUserById.
         * @param request queryUserByIdReq message or plain object
         * @returns Promise
         */
        public removeUserById(request: user.IqueryUserByIdReq): Promise<user.removeUserByIdRsp>;

        /**
         * Calls addReaderTypeById.
         * @param request addReaderTypeByIdReq message or plain object
         * @param callback Node-style callback called with the error, if any, and queryUserByIdRsp
         */
        public addReaderTypeById(request: user.IaddReaderTypeByIdReq, callback: book.book_service.addReaderTypeByIdCallback): void;

        /**
         * Calls addReaderTypeById.
         * @param request addReaderTypeByIdReq message or plain object
         * @returns Promise
         */
        public addReaderTypeById(request: user.IaddReaderTypeByIdReq): Promise<user.queryUserByIdRsp>;

        /**
         * Calls modiReaderTypeByid.
         * @param request modiReaderTypeByidReq message or plain object
         * @param callback Node-style callback called with the error, if any, and queryUserByIdRsp
         */
        public modiReaderTypeByid(request: user.ImodiReaderTypeByidReq, callback: book.book_service.modiReaderTypeByidCallback): void;

        /**
         * Calls modiReaderTypeByid.
         * @param request modiReaderTypeByidReq message or plain object
         * @returns Promise
         */
        public modiReaderTypeByid(request: user.ImodiReaderTypeByidReq): Promise<user.queryUserByIdRsp>;
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

        /**
         * Callback as used by {@link book.book_service#addUserInfo}.
         * @param error Error, if any
         * @param [response] addUserInfoRsp
         */
        type addUserInfoCallback = (error: (Error|null), response?: user.addUserInfoRsp) => void;

        /**
         * Callback as used by {@link book.book_service#removeUserById}.
         * @param error Error, if any
         * @param [response] removeUserByIdRsp
         */
        type removeUserByIdCallback = (error: (Error|null), response?: user.removeUserByIdRsp) => void;

        /**
         * Callback as used by {@link book.book_service#addReaderTypeById}.
         * @param error Error, if any
         * @param [response] queryUserByIdRsp
         */
        type addReaderTypeByIdCallback = (error: (Error|null), response?: user.queryUserByIdRsp) => void;

        /**
         * Callback as used by {@link book.book_service#modiReaderTypeByid}.
         * @param error Error, if any
         * @param [response] queryUserByIdRsp
         */
        type modiReaderTypeByidCallback = (error: (Error|null), response?: user.queryUserByIdRsp) => void;
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

    /** Properties of a readerType. */
    interface IreaderType {

        /** readerType CanLendQty */
        CanLendQty?: (number|null);

        /** readerType CanLendDay */
        CanLendDay?: (number|null);

        /** readerType CanContinueTimes */
        CanContinueTimes?: (number|null);

        /** readerType PunishRate */
        PunishRate?: (number|null);

        /** readerType DateValid */
        DateValid?: (number|null);

        /** readerType rdType */
        rdType?: (number|null);

        /** readerType rdTypeName */
        rdTypeName?: (string|null);
    }

    /** Represents a readerType. */
    class readerType implements IreaderType {

        /**
         * Constructs a new readerType.
         * @param [properties] Properties to set
         */
        constructor(properties?: comm.IreaderType);

        /** readerType CanLendQty. */
        public CanLendQty?: (number|null);

        /** readerType CanLendDay. */
        public CanLendDay?: (number|null);

        /** readerType CanContinueTimes. */
        public CanContinueTimes?: (number|null);

        /** readerType PunishRate. */
        public PunishRate?: (number|null);

        /** readerType DateValid. */
        public DateValid?: (number|null);

        /** readerType rdType. */
        public rdType?: (number|null);

        /** readerType rdTypeName. */
        public rdTypeName?: (string|null);

        /** readerType _CanLendQty. */
        public _CanLendQty?: "CanLendQty";

        /** readerType _CanLendDay. */
        public _CanLendDay?: "CanLendDay";

        /** readerType _CanContinueTimes. */
        public _CanContinueTimes?: "CanContinueTimes";

        /** readerType _PunishRate. */
        public _PunishRate?: "PunishRate";

        /** readerType _DateValid. */
        public _DateValid?: "DateValid";

        /** readerType _rdType. */
        public _rdType?: "rdType";

        /** readerType _rdTypeName. */
        public _rdTypeName?: "rdTypeName";

        /**
         * Creates a new readerType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns readerType instance
         */
        public static create(properties?: comm.IreaderType): comm.readerType;

        /**
         * Encodes the specified readerType message. Does not implicitly {@link comm.readerType.verify|verify} messages.
         * @param message readerType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: comm.IreaderType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified readerType message, length delimited. Does not implicitly {@link comm.readerType.verify|verify} messages.
         * @param message readerType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: comm.IreaderType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a readerType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns readerType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): comm.readerType;

        /**
         * Decodes a readerType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns readerType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): comm.readerType;

        /**
         * Verifies a readerType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a readerType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns readerType
         */
        public static fromObject(object: { [k: string]: any }): comm.readerType;

        /**
         * Creates a plain object from a readerType message. Also converts values to other types if specified.
         * @param message readerType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: comm.readerType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this readerType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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

    /** Properties of an addUserInfoRsp. */
    interface IaddUserInfoRsp {

        /** addUserInfoRsp code */
        code: number;

        /** addUserInfoRsp msg */
        msg: string;

        /** addUserInfoRsp data */
        data: comm.IUserInfo;
    }

    /** Represents an addUserInfoRsp. */
    class addUserInfoRsp implements IaddUserInfoRsp {

        /**
         * Constructs a new addUserInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IaddUserInfoRsp);

        /** addUserInfoRsp code. */
        public code: number;

        /** addUserInfoRsp msg. */
        public msg: string;

        /** addUserInfoRsp data. */
        public data: comm.IUserInfo;

        /**
         * Creates a new addUserInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns addUserInfoRsp instance
         */
        public static create(properties?: user.IaddUserInfoRsp): user.addUserInfoRsp;

        /**
         * Encodes the specified addUserInfoRsp message. Does not implicitly {@link user.addUserInfoRsp.verify|verify} messages.
         * @param message addUserInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IaddUserInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified addUserInfoRsp message, length delimited. Does not implicitly {@link user.addUserInfoRsp.verify|verify} messages.
         * @param message addUserInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IaddUserInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an addUserInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns addUserInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.addUserInfoRsp;

        /**
         * Decodes an addUserInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns addUserInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.addUserInfoRsp;

        /**
         * Verifies an addUserInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an addUserInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns addUserInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): user.addUserInfoRsp;

        /**
         * Creates a plain object from an addUserInfoRsp message. Also converts values to other types if specified.
         * @param message addUserInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.addUserInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this addUserInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a removeUserByIdRsp. */
    interface IremoveUserByIdRsp {

        /** removeUserByIdRsp code */
        code: number;

        /** removeUserByIdRsp msg */
        msg: string;
    }

    /** Represents a removeUserByIdRsp. */
    class removeUserByIdRsp implements IremoveUserByIdRsp {

        /**
         * Constructs a new removeUserByIdRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IremoveUserByIdRsp);

        /** removeUserByIdRsp code. */
        public code: number;

        /** removeUserByIdRsp msg. */
        public msg: string;

        /**
         * Creates a new removeUserByIdRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns removeUserByIdRsp instance
         */
        public static create(properties?: user.IremoveUserByIdRsp): user.removeUserByIdRsp;

        /**
         * Encodes the specified removeUserByIdRsp message. Does not implicitly {@link user.removeUserByIdRsp.verify|verify} messages.
         * @param message removeUserByIdRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IremoveUserByIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified removeUserByIdRsp message, length delimited. Does not implicitly {@link user.removeUserByIdRsp.verify|verify} messages.
         * @param message removeUserByIdRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IremoveUserByIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a removeUserByIdRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns removeUserByIdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.removeUserByIdRsp;

        /**
         * Decodes a removeUserByIdRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns removeUserByIdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.removeUserByIdRsp;

        /**
         * Verifies a removeUserByIdRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a removeUserByIdRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns removeUserByIdRsp
         */
        public static fromObject(object: { [k: string]: any }): user.removeUserByIdRsp;

        /**
         * Creates a plain object from a removeUserByIdRsp message. Also converts values to other types if specified.
         * @param message removeUserByIdRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.removeUserByIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this removeUserByIdRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a queryUserByIdRsp. */
    interface IqueryUserByIdRsp {

        /** queryUserByIdRsp code */
        code: number;

        /** queryUserByIdRsp msg */
        msg: string;

        /** queryUserByIdRsp data */
        data: comm.IreaderType;
    }

    /** Represents a queryUserByIdRsp. */
    class queryUserByIdRsp implements IqueryUserByIdRsp {

        /**
         * Constructs a new queryUserByIdRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IqueryUserByIdRsp);

        /** queryUserByIdRsp code. */
        public code: number;

        /** queryUserByIdRsp msg. */
        public msg: string;

        /** queryUserByIdRsp data. */
        public data: comm.IreaderType;

        /**
         * Creates a new queryUserByIdRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns queryUserByIdRsp instance
         */
        public static create(properties?: user.IqueryUserByIdRsp): user.queryUserByIdRsp;

        /**
         * Encodes the specified queryUserByIdRsp message. Does not implicitly {@link user.queryUserByIdRsp.verify|verify} messages.
         * @param message queryUserByIdRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IqueryUserByIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified queryUserByIdRsp message, length delimited. Does not implicitly {@link user.queryUserByIdRsp.verify|verify} messages.
         * @param message queryUserByIdRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IqueryUserByIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a queryUserByIdRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns queryUserByIdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.queryUserByIdRsp;

        /**
         * Decodes a queryUserByIdRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns queryUserByIdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.queryUserByIdRsp;

        /**
         * Verifies a queryUserByIdRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a queryUserByIdRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns queryUserByIdRsp
         */
        public static fromObject(object: { [k: string]: any }): user.queryUserByIdRsp;

        /**
         * Creates a plain object from a queryUserByIdRsp message. Also converts values to other types if specified.
         * @param message queryUserByIdRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.queryUserByIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this queryUserByIdRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a modiReaderTypeByidReq. */
    interface ImodiReaderTypeByidReq {

        /** modiReaderTypeByidReq rdType */
        rdType: number;

        /** modiReaderTypeByidReq rdTypeInfo */
        rdTypeInfo: comm.IreaderType;
    }

    /** Represents a modiReaderTypeByidReq. */
    class modiReaderTypeByidReq implements ImodiReaderTypeByidReq {

        /**
         * Constructs a new modiReaderTypeByidReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ImodiReaderTypeByidReq);

        /** modiReaderTypeByidReq rdType. */
        public rdType: number;

        /** modiReaderTypeByidReq rdTypeInfo. */
        public rdTypeInfo: comm.IreaderType;

        /**
         * Creates a new modiReaderTypeByidReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns modiReaderTypeByidReq instance
         */
        public static create(properties?: user.ImodiReaderTypeByidReq): user.modiReaderTypeByidReq;

        /**
         * Encodes the specified modiReaderTypeByidReq message. Does not implicitly {@link user.modiReaderTypeByidReq.verify|verify} messages.
         * @param message modiReaderTypeByidReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ImodiReaderTypeByidReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified modiReaderTypeByidReq message, length delimited. Does not implicitly {@link user.modiReaderTypeByidReq.verify|verify} messages.
         * @param message modiReaderTypeByidReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ImodiReaderTypeByidReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a modiReaderTypeByidReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns modiReaderTypeByidReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.modiReaderTypeByidReq;

        /**
         * Decodes a modiReaderTypeByidReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns modiReaderTypeByidReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.modiReaderTypeByidReq;

        /**
         * Verifies a modiReaderTypeByidReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a modiReaderTypeByidReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns modiReaderTypeByidReq
         */
        public static fromObject(object: { [k: string]: any }): user.modiReaderTypeByidReq;

        /**
         * Creates a plain object from a modiReaderTypeByidReq message. Also converts values to other types if specified.
         * @param message modiReaderTypeByidReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.modiReaderTypeByidReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this modiReaderTypeByidReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an addReaderTypeByIdReq. */
    interface IaddReaderTypeByIdReq {

        /** addReaderTypeByIdReq rdID */
        rdID: number;

        /** addReaderTypeByIdReq rdType */
        rdType: number;
    }

    /** Represents an addReaderTypeByIdReq. */
    class addReaderTypeByIdReq implements IaddReaderTypeByIdReq {

        /**
         * Constructs a new addReaderTypeByIdReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IaddReaderTypeByIdReq);

        /** addReaderTypeByIdReq rdID. */
        public rdID: number;

        /** addReaderTypeByIdReq rdType. */
        public rdType: number;

        /**
         * Creates a new addReaderTypeByIdReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns addReaderTypeByIdReq instance
         */
        public static create(properties?: user.IaddReaderTypeByIdReq): user.addReaderTypeByIdReq;

        /**
         * Encodes the specified addReaderTypeByIdReq message. Does not implicitly {@link user.addReaderTypeByIdReq.verify|verify} messages.
         * @param message addReaderTypeByIdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IaddReaderTypeByIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified addReaderTypeByIdReq message, length delimited. Does not implicitly {@link user.addReaderTypeByIdReq.verify|verify} messages.
         * @param message addReaderTypeByIdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IaddReaderTypeByIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an addReaderTypeByIdReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns addReaderTypeByIdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.addReaderTypeByIdReq;

        /**
         * Decodes an addReaderTypeByIdReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns addReaderTypeByIdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.addReaderTypeByIdReq;

        /**
         * Verifies an addReaderTypeByIdReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an addReaderTypeByIdReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns addReaderTypeByIdReq
         */
        public static fromObject(object: { [k: string]: any }): user.addReaderTypeByIdReq;

        /**
         * Creates a plain object from an addReaderTypeByIdReq message. Also converts values to other types if specified.
         * @param message addReaderTypeByIdReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.addReaderTypeByIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this addReaderTypeByIdReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
