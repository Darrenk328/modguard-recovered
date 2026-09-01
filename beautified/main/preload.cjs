"use strict";
var d = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.prototype.hasOwnProperty;
var m = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let i of s(t))
      !u.call(e, i) &&
        i !== n &&
        d(e, i, {
          get: () => t[i],
          enumerable: !(r = a(t, i)) || r.enumerable,
        });
  return e;
};
var l = (e) => m(d({}, "__esModule", { value: !0 }), e);
var c = {};
module.exports = l(c);
var o = require("electron"),
  g = {
    platform: process.platform,
    checkPath: (e) => o.ipcRenderer.invoke("modguard:checkPath", e),
    checkBytes: (e, t) => o.ipcRenderer.invoke("modguard:checkBytes", e, t),
    onCheckProgress: (e) => {
      let t = (n, r) => e(r);
      return (
        o.ipcRenderer.on("modguard:checkProgress", t),
        () => {
          o.ipcRenderer.off("modguard:checkProgress", t);
        }
      );
    },
    pathForFile: (e) => {
      try {
        let t = o.webUtils?.getPathForFile(e) || null;
        return (
          t !== null && o.ipcRenderer.send("modguard:noteSourcePath", t),
          t
        );
      } catch {
        return null;
      }
    },
    expandPaths: (e) => o.ipcRenderer.invoke("modguard:expandPaths", e),
    pickFiles: () => o.ipcRenderer.invoke("modguard:pickFiles"),
    pickFolder: () => o.ipcRenderer.invoke("modguard:pickFolder"),
    pickManageFolder: () => o.ipcRenderer.invoke("modguard:pickManageFolder"),
    modFolders: () => o.ipcRenderer.invoke("modguard:modFolders"),
    listMods: (e) => o.ipcRenderer.invoke("modguard:listMods", e),
    reportMalicious: (e, t, n) =>
      o.ipcRenderer.invoke("modguard:reportMalicious", e, t, n),
    purposesFor: (e) => o.ipcRenderer.invoke("modguard:purposes", e),
    setPurposes: (e, t) => o.ipcRenderer.invoke("modguard:setPurposes", e, t),
    communitySettings: () => o.ipcRenderer.invoke("modguard:communitySettings"),
    setCommunitySharing: (e) =>
      o.ipcRenderer.invoke("modguard:setCommunitySharing", e),
    setCheckProvenance: (e) =>
      o.ipcRenderer.invoke("modguard:setCheckProvenance", e),
    disableMod: (e) => o.ipcRenderer.invoke("modguard:disableMod", e),
    restoreMod: (e) => o.ipcRenderer.invoke("modguard:restoreMod", e),
    installMods: (e, t, n) =>
      o.ipcRenderer.invoke("modguard:installMods", e, t, n),
    trashMod: (e) => o.ipcRenderer.invoke("modguard:trashMod", e),
    reveal: (e) => o.ipcRenderer.invoke("modguard:reveal", e),
    openHomepage: () => o.ipcRenderer.invoke("modguard:openHomepage"),
    appInfo: () => o.ipcRenderer.invoke("modguard:appInfo"),
    updateState: () => o.ipcRenderer.invoke("modguard:updateState"),
    setAutoUpdate: (e) => o.ipcRenderer.invoke("modguard:setAutoUpdate", e),
    checkForUpdate: () => o.ipcRenderer.invoke("modguard:checkForUpdate"),
    restartToUpdate: () => o.ipcRenderer.invoke("modguard:restartToUpdate"),
    onUpdateState: (e) => {
      let t = (n, r) => e(r);
      return (
        o.ipcRenderer.on("modguard:updates", t),
        () => {
          o.ipcRenderer.off("modguard:updates", t);
        }
      );
    },
    onMenuAction: (e) => {
      let t = (n, r) => e(r);
      return (
        o.ipcRenderer.on("modguard:menu", t),
        () => {
          o.ipcRenderer.off("modguard:menu", t);
        }
      );
    },
    downloadsWatch: () => o.ipcRenderer.invoke("modguard:downloadsWatch"),
    setDownloadsWatch: (e) =>
      o.ipcRenderer.invoke("modguard:setDownloadsWatch", e),
    dismissDownloadNotice: (e) =>
      o.ipcRenderer.invoke("modguard:dismissDownloadNotice", e),
    onDownloadsWatch: (e) => {
      let t = (n, r) => e(r);
      return (
        o.ipcRenderer.on("modguard:downloads", t),
        () => {
          o.ipcRenderer.off("modguard:downloads", t);
        }
      );
    },
    liveFeed: () => o.ipcRenderer.invoke("modguard:liveFeed"),
    setLiveFeed: (e) => o.ipcRenderer.invoke("modguard:setLiveFeed", e),
    setLiveFeedExpanded: (e) =>
      o.ipcRenderer.invoke("modguard:setLiveFeedExpanded", e),
    onLiveFeed: (e) => {
      let t = (n, r) => e(r);
      return (
        o.ipcRenderer.on("modguard:liveFeed", t),
        () => {
          o.ipcRenderer.off("modguard:liveFeed", t);
        }
      );
    },
    prelaunch: () => o.ipcRenderer.invoke("modguard:prelaunch"),
    setPrelaunch: (e) => o.ipcRenderer.invoke("modguard:setPrelaunch", e),
    prelaunchLook: () => o.ipcRenderer.invoke("modguard:prelaunchLook"),
    prelaunchPutBack: (e) =>
      o.ipcRenderer.invoke("modguard:prelaunchPutBack", e),
    prelaunchSwitchOff: (e) =>
      o.ipcRenderer.invoke("modguard:prelaunchSwitchOff", e),
    dismissPrelaunchFinding: (e) =>
      o.ipcRenderer.invoke("modguard:dismissPrelaunchFinding", e),
    onPrelaunch: (e) => {
      let t = (n, r) => e(r);
      return (
        o.ipcRenderer.on("modguard:prelaunch", t),
        () => {
          o.ipcRenderer.off("modguard:prelaunch", t);
        }
      );
    },
    guardStatus: () => o.ipcRenderer.invoke("modguard:guardStatus"),
    startGuard: () => o.ipcRenderer.invoke("modguard:startGuard"),
    stopGuard: () => o.ipcRenderer.invoke("modguard:stopGuard"),
    defenseSettings: () => o.ipcRenderer.invoke("modguard:defenseSettings"),
    setDefenseSettings: (e) =>
      o.ipcRenderer.invoke("modguard:setDefenseSettings", e),
    stopGame: () => o.ipcRenderer.invoke("modguard:stopGame"),
    cancelAutoClose: () => o.ipcRenderer.invoke("modguard:cancelAutoClose"),
    holdGame: () => o.ipcRenderer.invoke("modguard:holdGame"),
    releaseGame: () => o.ipcRenderer.invoke("modguard:releaseGame"),
    incidentText: (e, t) => o.ipcRenderer.invoke("modguard:incidentText", e, t),
    copyToClipboard: (e) => o.ipcRenderer.invoke("modguard:copyToClipboard", e),
    incidentHistory: () => o.ipcRenderer.invoke("modguard:incidentHistory"),
    acknowledgeIncident: (e) =>
      o.ipcRenderer.invoke("modguard:acknowledgeIncident", e),
    markRecoveryStep: (e, t) =>
      o.ipcRenderer.invoke("modguard:markRecoveryStep", e, t),
    openRecoveryLink: (e) =>
      o.ipcRenderer.invoke("modguard:openRecoveryLink", e),
    onGuardEvent: (e) => {
      let t = (n, r) => e(r);
      return (
        o.ipcRenderer.on("modguard:guard", t),
        () => {
          o.ipcRenderer.off("modguard:guard", t);
        }
      );
    },
  };
o.contextBridge.exposeInMainWorld("modguard", g);
