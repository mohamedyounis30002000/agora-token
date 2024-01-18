const RtcTokenBuilder = require("../src/RtcTokenBuilder2").RtcTokenBuilder;
const RtcRole = require("../src/RtcTokenBuilder2").Role;

const appID = "11efb81da2e0405cb0f4b1c159b66e0d";
const appCertificate = "76bf6543723d4963a0d33c2a25999da2";
const channelName = "myse";
const uid = 2882341273;
const account = "2882341273";
const role = RtcRole.PUBLISHER;
const tokenExpirationInSecond = 3600 *24 ;
const privilegeExpirationInSecond = 3600 *24 ;
const joinChannelPrivilegeExpireInSeconds = 3600 *24 ;
const pubAudioPrivilegeExpireInSeconds = 3600 *24 ;
const pubVideoPrivilegeExpireInSeconds = 3600 *24 ;
const pubDataStreamPrivilegeExpireInSeconds = 3600 *24 ;

// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, tokenExpirationInSecond, privilegeExpirationInSecond);
console.log("Token with int uid: " + tokenA);

// Build token with user account
const tokenB = RtcTokenBuilder.buildTokenWithUserAccount(
    appID,
    appCertificate,
    channelName,
    account,
    role,
    tokenExpirationInSecond,
    privilegeExpirationInSecond
);
console.log("Token with user account: " + tokenB);

const tokenC = RtcTokenBuilder.buildTokenWithUidAndPrivilege(
    appID,
    appCertificate,
    channelName,
    uid,
    tokenExpirationInSecond,
    joinChannelPrivilegeExpireInSeconds,
    pubAudioPrivilegeExpireInSeconds,
    pubVideoPrivilegeExpireInSeconds,
    pubDataStreamPrivilegeExpireInSeconds
);
console.log("Token with int uid and privilege:" + tokenC);

const tokenD = RtcTokenBuilder.BuildTokenWithUserAccountAndPrivilege(
    appID,
    appCertificate,
    channelName,
    account,
    tokenExpirationInSecond,
    joinChannelPrivilegeExpireInSeconds,
    pubAudioPrivilegeExpireInSeconds,
    pubVideoPrivilegeExpireInSeconds,
    pubDataStreamPrivilegeExpireInSeconds
);
console.log("Token with user account and privilege:" + tokenD);
