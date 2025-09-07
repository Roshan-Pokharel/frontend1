// --- DOM ELEMENT SELECTORS ---
const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const userList = document.getElementById("userList");
const roomTitle = document.getElementById("roomTitle");
const showUsersBtn = document.getElementById("showUsersBtn");
const themeToggleBtn = document.getElementById("theme-toggle");
const logoutBtn = document.getElementById("logoutBtn");
const logoutBtnSidebar = document.getElementById("logoutBtnSidebar");
const logoutBtnMobile = document.getElementById("logoutBtnMobile");
const typingIndicator = document.getElementById("typing-indicator");
const errorMessage = document.getElementById("error-message");
const backgroundOptionsContainer = document.getElementById("backgroundOptions");
const connectedChatsList = document.getElementById("connectedChatsList");
const connectedChatsListMobile = document.getElementById(
  "connectedChatsListMobile"
);
const backendUrl = "https://backend-1-75se.onrender.com";
const shareFileBtn = document.getElementById("shareFileBtn");
const fileInput = document.getElementById("fileInput");
const recordAudioBtn = document.getElementById("recordAudioBtn");
const recordingIndicator = document.getElementById("recordingIndicator");
const emojiBtn = document.getElementById("emojiBtn");
const emojiPicker = document.getElementById("emojiPicker");

// Auth Modals
const authContainer = document.getElementById("authContainer");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const registerAvatarInput = document.getElementById("registerAvatarInput");
const registerAvatarPreview = document.getElementById("registerAvatarPreview");

// Alert Modal
const alertModal = document.getElementById("alertModal");
const alertModalTitle = document.getElementById("alertModalTitle");
const alertModalMessage = document.getElementById("alertModalMessage");
const alertModalCloseBtn = document.getElementById("alertModalCloseBtn");

// Main Containers
const mainContainer = document.getElementById("mainContainer");
const topBar = document.getElementById("topBar");

// Modal elements
const allUsersModal = document.getElementById("allUsersModal");
const allUsersList = document.getElementById("allUsersList");
const createGameModal = document.getElementById("createGameModal");
const createGameForm = document.getElementById("createGameForm");
const roomNameInput = document.getElementById("roomNameInput");
const roomPasswordInput = document.getElementById("roomPasswordInput");
const cancelCreateGameBtn = document.getElementById("cancelCreateGameBtn");
const scoreboardModal = document.getElementById("scoreboardModal");
const scoreboardTitle = document.getElementById("scoreboardTitle");
const finalScores = document.getElementById("finalScores");
const closeScoreboardBtn = document.getElementById("closeScoreboardBtn");
const passwordPromptModal = document.getElementById("passwordPromptModal");
const passwordPromptForm = document.getElementById("passwordPromptForm");
const joinPasswordInput = document.getElementById("joinPasswordInput");
const cancelJoinBtn = document.getElementById("cancelJoinBtn");
const passwordError = document.getElementById("passwordError");

// Group Chat Elements
const createGroupModal = document.getElementById("createGroupModal");
const createGroupForm = document.getElementById("createGroupForm");
const cancelCreateGroupBtn = document.getElementById("cancelCreateGroupBtn");
const createGroupBtn = document.getElementById("createGroupBtn");
const createGroupBtnMobile = document.getElementById("createGroupBtnMobile");
const groupUserSelectionList = document.getElementById(
  "groupUserSelectionList"
);
const groupMemberCount = document.getElementById("groupMemberCount");
const groupsList = document.getElementById("groupsList");
const groupsListMobile = document.getElementById("groupsListMobile");
const manageGroupModal = document.getElementById("manageGroupModal");
const manageGroupTitle = document.getElementById("manageGroupTitle");
const currentGroupMembers = document.getElementById("currentGroupMembers");
const usersToAdd = document.getElementById("usersToAdd");
const closeManageGroupModalBtn = document.getElementById(
  "closeManageGroupModalBtn"
);
const deleteGroupBtn = document.getElementById("deleteGroupBtn");
const manageGroupBtn = document.getElementById("manageGroupBtn");

// New Game UI Elements
const wordSelectionModal = document.getElementById("wordSelectionModal");
const wordOptionsContainer = document.getElementById("wordOptionsContainer");
const doodleGameContainer = document.getElementById("doodleGameContainer");
const gameCanvas = document.getElementById("gameCanvas");
const gameInfo = document.getElementById("gameInfo");
const gameTimer = document.getElementById("gameTimer");
const drawingTools = document.getElementById("drawingTools");
const clearCanvasBtn = document.getElementById("clearCanvasBtn");
const gameOverlayMessage = document.getElementById("gameOverlayMessage");
const createGameRoomBtnDesktop = document.getElementById(
  "createGameRoomBtnDesktop"
);
const createGameRoomBtnMobile = document.getElementById(
  "createGameRoomBtnMobile"
);
const gameRoomListDesktop = document.getElementById("gameRoomListDesktop");
const gameRoomListMobile = document.getElementById("gameRoomListMobile");
const startGameBtn = document.getElementById("startGameBtn");
const stopGameBtn = document.getElementById("stopGameBtn");
const startGameBtnMobile = document.getElementById("startGameBtnMobile");
const stopGameBtnMobile = document.getElementById("stopGameBtnMobile");
const hangmanGameContainer = document.getElementById("hangmanGameContainer");
const hangmanTimer = document.getElementById("hangmanTimer");
const hangmanDrawing = document.getElementById("hangmanDrawing");
const hangmanWordDisplay = document.getElementById("hangmanWordDisplay");
const hangmanIncorrectLetters = document.getElementById(
  "hangmanIncorrectLetters"
);
const hangmanGameInfo = document.getElementById("hangmanGameInfo");
const howToPlayModal = document.getElementById("howToPlayModal");
const howToPlayTitle = document.getElementById("howToPlayTitle");
const howToPlayRules = document.getElementById("howToPlayRules");
const closeHowToPlayBtn = document.getElementById("closeHowToPlayBtn");
const howToPlayBtnDesktop = document.getElementById("howToPlayBtnDesktop");
const howToPlayBtnMobile = document.getElementById("howToPlayBtnMobile");

// Profile Picture Elements
const profilePictureModal = document.getElementById("profilePictureModal");
const changeAvatarBtn = document.getElementById("changeAvatarBtn");
const changeAvatarBtnMobile = document.getElementById("changeAvatarBtnMobile");
const myProfilePreview = document.getElementById("myProfilePreview");
const myProfilePreviewMobile = document.getElementById(
  "myProfilePreviewMobile"
);
const newAvatarInput = document.getElementById("newAvatarInput");
const newAvatarPreview = document.getElementById("newAvatarPreview");
const cancelAvatarChangeBtn = document.getElementById("cancelAvatarChangeBtn");
const saveAvatarChangeBtn = document.getElementById("saveAvatarChangeBtn");

// Disconnect Modal Elements
const disconnectModal = document.getElementById("disconnectModal");
const cancelDisconnectBtn = document.getElementById("cancelDisconnectBtn");
const confirmDisconnectBtn = document.getElementById("confirmDisconnectBtn");

// Private Chat Request Modal Elements
const privateRequestModal = document.getElementById("privateRequestModal");
const privateRequestFrom = document.getElementById("privateRequestFrom");
const acceptRequestBtn = document.getElementById("acceptRequestBtn");
const declineRequestBtn = document.getElementById("declineRequestBtn");

// Incoming Call Modal Elements
const incomingCallModal = document.getElementById("incomingCallModal");
const incomingCallFrom = document.getElementById("incomingCallFrom");
const incomingCallAvatar = document.getElementById("incomingCallAvatar");
const acceptCallBtn = document.getElementById("acceptCallBtn");
const declineCallBtn = document.getElementById("declineCallBtn");

// P2P File Transfer Modals
const fileTransferRequestModal = document.getElementById(
  "fileTransferRequestModal"
);
const fileRequestInfo = document.getElementById("fileRequestInfo");
const acceptFileBtn = document.getElementById("acceptFileBtn");
const declineFileBtn = document.getElementById("declineFileBtn");
const fileTransferProgressModal = document.getElementById(
  "fileTransferProgressModal"
);
const fileProgressTitle = document.getElementById("fileProgressTitle");
const fileProgressInfo = document.getElementById("fileProgressInfo");
const fileProgressBar = document.getElementById("fileProgressBar");
const fileProgressStatus = document.getElementById("fileProgressStatus");
const fileDownloadLinkContainer = document.getElementById(
  "fileDownloadLinkContainer"
);
const cancelFileTransferBtn = document.getElementById("cancelFileTransferBtn");

// Mobile Modal Tab elements
const mobileModalNav = document.getElementById("mobileModalNav");
const mobileModalContent = document.getElementById("mobileModalContent");
const modalTabWrapper = document.querySelector(".modal-tab-wrapper");
const backgroundOptionsMobileContainer = document.getElementById(
  "backgroundOptionsMobile"
);

// Sidebar elements
const sidebarNav = document.getElementById("sidebar-nav");
const sidebarPanels = document.querySelectorAll(".sidebar-panel");

// --- VIDEO/AUDIO CALL ELEMENTS ---
const callContainer = document.getElementById("callContainer");
const videoGrid = document.getElementById("videoGrid");
const callPartnerName = document.getElementById("callPartnerName");
const callStatusIndicator = document.getElementById("callStatusIndicator");
const localVideo = document.getElementById("localVideo");
const audioCallAvatar = document.getElementById("audioCallAvatar");
const startAudioCallBtn = document.getElementById("startAudioCallBtn");
const startVideoCallBtn = document.getElementById("startVideoCallBtn");
const endCallBtn = document.getElementById("endCallBtn");
const toggleMicBtn = document.getElementById("toggleMicBtn");
const toggleVideoBtn = document.getElementById("toggleVideoBtn");

// --- APPLICATION & GAME STATE ---
let socket;
let latestUsers = [];
let myGroups = [];
let myProfile = {};
let currentRoom = { id: null, type: null, creator: null };
let myId = null;
let myUserId = null; // To store the permanent user ID
let isTyping = false;
let typingTimer;
const TYPING_TIMER_LENGTH = 1500;
let joiningRoomId = null;
let pendingPrivateRequests = {};
let incomingPrivateRequest = null;
let recentlyDeclinedBy = {};
let connectedRooms = {};
let disconnectTarget = null;
let newProfilePictureDataUrl = null;

// Audio recording state
let mediaRecorder;
let audioChunks = [];
let isRecording = false;

// Canvas/Drawing State
const ctx = gameCanvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentGameState = {};
let overlayTimer;
let currentDrawingHistory = [];
let roundCountdownInterval = null;
let hangmanCountdownInterval = null;
let drawingConfig = {
  color: "#000000",
  size: 5,
};

// --- WEBRTC & CALL STATE ---
let peerConnections = {}; // For video/audio calls
let localStream;
let isCallActive = false;
let currentCallType = null; // 'private' or 'group'
let callPartnerId = null; // For private calls
let incomingCallData = null;
let isMakingOffer = {}; // Track offer status per peer

let incomingFileRequest = null;
let currentFileTransfer = null;
const FILE_CHUNK_SIZE = 16 * 1024; // 16KB chunk size for file transfers
let fileTransferConnections = {}; // Stores P2P connections for file transfers
let fileChunks = {}; // Stores incoming file chunks

// --- WEBRTC CONFIGURATION ---
const peerConnectionConfig = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
    { urls: "stun:stun2.l.google.com:19302" },
  ],
};

const predefinedBackgrounds = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1374&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1332&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1470&auto=format&fit=crop",
];

// --- INITIALIZATION & EVENT LISTENERS ---
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("chatTheme") || "light";
  applyTheme(savedTheme);
  const savedBackground = localStorage.getItem("chatBackground");
  if (savedBackground) applyBackground(savedBackground);
  adjustHeightForKeyboard();
  populateBackgroundOptions(backgroundOptionsContainer);
  populateEmojiPicker();

  const token = localStorage.getItem("token");
  if (token) {
    connectSocket(token);
  } else {
    authContainer.style.display = "flex";
  }
});
window.addEventListener("resize", () => {
  adjustHeightForKeyboard();
  if (currentRoom.type === "doodle") {
    setupCanvas();
  }
});

shareFileBtn.addEventListener("click", () => {
  if (currentRoom.type === "private") {
    fileInput.click();
  } else {
    showAlert(
      "Feature Unavailable",
      "Peer-to-peer file sharing is only available in private chats.",
      "info"
    );
  }
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file || currentRoom.type !== "private") return;
  const partnerInfo = connectedRooms[currentRoom.id]?.withUser;
  if (partnerInfo && partnerInfo.id) {
    initiateFileTransfer(partnerInfo.id, file);
  }
  e.target.value = ""; // Reset input to allow selecting the same file again
});

showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "flex";
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "flex";
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  try {
    const response = await fetch(backendUrl + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        profilePicture: newProfilePictureDataUrl,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      showAlert(
        "Success!",
        "Registration successful! Please login.",
        "success"
      );
      showLogin.click();
      registerForm.reset();
      registerAvatarPreview.src =
        "https://placehold.co/80x80/e5e7eb/4b5563?text=Avatar";
      newProfilePictureDataUrl = null;
    } else {
      showAlert("Registration Error", data.message, "error");
    }
  } catch (error) {
    showAlert(
      "Registration Failed",
      "Could not connect to the server.",
      "error"
    );
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch(backendUrl + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      connectSocket(data.token);
    } else {
      showAlert("Login Error", data.message, "error");
    }
  } catch (error) {
    showAlert("Login Failed", "Could not connect to the server.", "error");
  }
});

const handleLogout = () => {
  localStorage.removeItem("token");
  if (socket) {
    socket.disconnect();
  }
  location.reload();
};

logoutBtn.addEventListener("click", handleLogout);
logoutBtnSidebar.addEventListener("click", handleLogout);
logoutBtnMobile.addEventListener("click", handleLogout);

alertModalCloseBtn.addEventListener("click", () => {
  alertModal.style.display = "none";
});

function showAlert(title, message, type = "info") {
  alertModalTitle.textContent = title;
  alertModalMessage.textContent = message;

  if (type === "success") {
    alertModalTitle.style.color = "var(--start-color)";
  } else if (type === "error") {
    alertModalTitle.style.color = "var(--error-color)";
  } else {
    alertModalTitle.style.color = "var(--primary-accent)";
  }

  alertModal.style.display = "flex";
}

function connectSocket(token) {
  if (socket && socket.active) {
    socket.disconnect();
  }
  socket = io(backendUrl, {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.log("✅ Socket connected. Waiting for session details...");
    authContainer.style.display = "none";
    mainContainer.style.display = "flex";
    topBar.style.display = "flex";
    setupSocketListeners();
  });

  socket.on("connect_error", (err) => {
    console.error("Connection Error:", err.message);
    localStorage.removeItem("token");
    authContainer.style.display = "flex";
    mainContainer.style.display = "none";
    topBar.style.display = "none";
  });
}

function setupSocketListeners() {
  socket.off(); // Remove all previous listeners to prevent duplicates on reconnect

  socket.on("connect", () => {
    console.log("Socket re-connected:", socket.id);
  });

  // --- HANDLE SESSION DETAILS AND RESTORE STATE ---
  socket.on(
    "session details",
    ({
      socketId,
      userId,
      activePrivateChats,
      groups,
      initialRoom,
      userProfile,
    }) => {
      myId = socketId;
      myUserId = userId;
      myGroups = groups || [];
      myProfile = userProfile || {};

      console.log(
        `✅ Session ready. My Socket ID: ${myId}, My User ID: ${myUserId}`
      );
      console.log(`Restored ${myGroups.length} groups.`);

      if (activePrivateChats && activePrivateChats.length > 0) {
        activePrivateChats.forEach((chat) => {
          const persistentRoomId = [myUserId, chat.withUser.userId]
            .sort()
            .join("-");
          connectedRooms[persistentRoomId] = { withUser: chat.withUser };
        });
      }

      updateMyProfilePreview();

      if (initialRoom) {
        currentRoom = { id: initialRoom.id, type: initialRoom.type };
        roomTitle.textContent = initialRoom.name;
        messages.innerHTML = "";
        initialRoom.history.forEach(addMessage);
        updateCallButtonVisibility();
        updateSideBar();
      } else {
        switchRoom("public", "🌐 Public Chat", "public");
      }
    }
  );

  input.addEventListener("input", () => {
    if (!isTyping) {
      isTyping = true;
      socket.emit("typing", { room: currentRoom.id });
    }
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      isTyping = false;
      socket.emit("stop typing", { room: currentRoom.id });
    }, TYPING_TIMER_LENGTH);
  });
  themeToggleBtn.addEventListener("click", () => {
    const isDarkMode = document.body.classList.contains("dark-mode");
    const newTheme = isDarkMode ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("chatTheme", newTheme);
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    clearTimeout(typingTimer);
    isTyping = false;
    socket.emit("stop typing", { room: currentRoom.id });

    if (
      currentGameState.gameType === "hangman" &&
      currentGameState.isRoundActive
    ) {
      socket.emit("hangman:guess", { room: currentRoom.id, letter: text });
    } else {
      socket.emit("chat message", { room: currentRoom.id, text: text });
    }

    input.value = "";
    setTimeout(() => input.focus(), 10);
  });
  showUsersBtn.onclick = () => {
    updateSideBar();
    populateBackgroundOptions(backgroundOptionsMobileContainer);
    allUsersModal.style.display = "flex";
    updateGameButtonVisibility(currentGameState);
  };
  allUsersModal.addEventListener("click", (e) => {
    if (e.target === allUsersModal) allUsersModal.style.display = "none";
  });
  scoreboardModal.addEventListener("click", (e) => {
    if (e.target === scoreboardModal) scoreboardModal.style.display = "none";
  });
  closeScoreboardBtn.onclick = () => (scoreboardModal.style.display = "none");
  const mobileTabOrder = ["users", "game", "appearance"];
  function switchMobileTab(tabName) {
    const tabIndex = mobileTabOrder.indexOf(tabName);
    if (tabIndex === -1) return;
    document
      .querySelectorAll(".modal-nav-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector(`.modal-nav-btn[data-tab="${tabName}"]`)
      .classList.add("active");
    modalTabWrapper.style.transform = `translateX(-${tabIndex * 100}%)`;
  }
  mobileModalNav.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    switchMobileTab(e.target.dataset.tab);
  });
  sidebarNav.addEventListener("click", (e) => {
    const button = e.target.closest(".sidebar-nav-btn");
    if (!button) return;
    const panelId = button.dataset.panel;
    document
      .querySelectorAll(".sidebar-nav-btn")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    sidebarPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === panelId);
    });
  });

  socket.on("typing", ({ name, room }) => {
    if (room === currentRoom.id) {
      typingIndicator.textContent = `${name} is typing...`;
      typingIndicator.style.opacity = "1";
    }
  });
  socket.on("stop typing", ({ room }) => {
    if (room === currentRoom.id) {
      typingIndicator.textContent = "";
      typingIndicator.style.opacity = "0";
    }
  });
  socket.on("user list", (users) => {
    latestUsers = users;
    updateSideBar();
  });
  socket.on("room history", (msgs) => {
    messages.innerHTML = "";
    msgs.forEach(addMessage);
  });
  socket.on("rate limit", (msg) => displayError(msg));
  socket.on("message was read", ({ room, messageId }) => {
    if (room === currentRoom.id) {
      const msgEl = document.querySelector(
        `.msg[data-message-id="${messageId}"] .read-receipt`
      );
      if (msgEl) {
        msgEl.textContent = "✓✓";
        msgEl.classList.add("read");
      }
    }
  });
  socket.on("user profile updated", ({ userId, profilePicture }) => {
    const user = latestUsers.find((u) => u.userId === userId);
    if (user) {
      user.profilePicture = profilePicture;
      updateSideBar();
    }
    if (userId === myUserId) {
      myProfile.profilePicture = profilePicture;
      updateMyProfilePreview();
    }
  });

  socket.on("chat message", (msg) => {
    if (msg.room === currentRoom.id) {
      typingIndicator.textContent = "";
      typingIndicator.style.opacity = "0";
      addMessage(msg);
      if (currentRoom.type === "private" && msg.room !== "public") {
        const otherId = msg.id === myId ? msg.to : msg.id;
        updateSideBar();
      }
    } else if (
      (msg.room.includes("-") || msg.room.startsWith("group-")) &&
      !msg.room.startsWith("game-") &&
      msg.senderId !== myId
    ) {
      updateSideBar();
    }
  });
  socket.on("private:request_incoming", ({ fromUser }) => {
    if (
      isCallActive ||
      privateRequestModal.style.display === "flex" ||
      incomingCallModal.style.display === "flex"
    ) {
      socket.emit("private:decline", {
        requesterId: fromUser.id,
        reason: "busy",
      });
      return;
    }
    incomingPrivateRequest = fromUser;
    privateRequestFrom.textContent = `${fromUser.name} wants to chat privately.`;
    privateRequestModal.style.display = "flex";
  });
  socket.on("private:request_accepted", ({ room, withUser }) => {
    delete pendingPrivateRequests[withUser.id];
    delete recentlyDeclinedBy[withUser.id];
    privateRequestModal.style.display = "none";
    incomingPrivateRequest = null;
    if (allUsersModal.style.display === "flex") {
      allUsersModal.style.display = "none";
    }
    connectedRooms[room.id] = { withUser };
    switchRoom(room.id, `🔒 Chat with ${withUser.name}`, "private");
    showGameOverlayMessage(
      `You are now chatting privately with ${withUser.name}.`,
      2000,
      "system"
    );
  });
  socket.on("private:request_declined", ({ byUser, reason }) => {
    delete pendingPrivateRequests[byUser.id];
    recentlyDeclinedBy[byUser.id] = true;
    let message = `${byUser.name} declined your chat request.`;
    if (reason === "busy") {
      message = `${byUser.name} is busy and cannot chat right now.`;
    } else if (reason === "offline") {
      message = `Your chat request to ${byUser.name} was cancelled as they went offline.`;
    }
    showGameOverlayMessage(message, 2000, "system");
    updateSideBar();
  });
  socket.on("private:request_error", (errorMsg) => {
    displayError(errorMsg);
    const targetId = Object.keys(pendingPrivateRequests)[0];
    if (targetId) {
      recentlyDeclinedBy[targetId] = true;
    }
    pendingPrivateRequests = {};
    updateSideBar();
  });
  socket.on("private:partner_left", ({ room, partnerName }) => {
    if (connectedRooms[room]) {
      if (currentRoom.id === room) {
        showGameOverlayMessage(
          `${partnerName} has left the private chat.`,
          2000,
          "system"
        );
        switchRoom("public", "🌐 Public Chat", "public");
      }
      delete connectedRooms[room];
      updateSideBar();
    }
  });

  // Group Listeners
  socket.on("group:created", (newGroup) => {
    myGroups.push(newGroup);
    updateSideBar();
    showAlert(
      "Group Created!",
      `You created the group "${newGroup.name}".`,
      "success"
    );
  });

  socket.on("group:create_error", (message) => {
    displayError(message);
  });

  socket.on("group:invited", (newGroup) => {
    myGroups.push(newGroup);
    socket.emit("join room", `group-${newGroup._id}`);
    updateSideBar();
    showAlert(
      "New Group!",
      `You have been added to the group "${newGroup.name}".`
    );
  });

  socket.on("group:updated", (updatedGroup) => {
    const index = myGroups.findIndex((g) => g._id === updatedGroup._id);
    if (index !== -1) {
      myGroups[index] = updatedGroup;
      updateSideBar();
      if (
        manageGroupModal.style.display === "flex" &&
        currentRoom.id === `group-${updatedGroup._id}`
      ) {
        showManageGroupModal(updatedGroup._id);
      }
    }
  });

  socket.on("group:removed", ({ groupId, groupName }) => {
    myGroups = myGroups.filter((g) => g._id !== groupId);
    showAlert(
      "Removed from Group",
      `You have been removed from "${groupName}".`
    );
    if (currentRoom.id === `group-${groupId}`) {
      switchRoom("public", "🌐 Public Chat", "public");
    }
    updateSideBar();
  });

  socket.on("group:deleted", ({ groupId, groupName }) => {
    myGroups = myGroups.filter((g) => g._id !== groupId);
    showAlert(
      "Group Deleted",
      `The group "${groupName}" has been deleted by the creator.`
    );
    if (currentRoom.id === `group-${groupId}`) {
      switchRoom("public", "🌐 Public Chat", "public");
    }
    updateSideBar();
  });

  // Game Listeners
  socket.on("game:present_words", (words) => {
    wordOptionsContainer.innerHTML = "";
    words.forEach((word) => {
      const button = document.createElement("button");
      button.textContent = word;
      button.className = "word-option-btn";
      button.onclick = () => {
        socket.emit("game:word_selected", { room: currentRoom.id, word });
        wordSelectionModal.style.display = "none";
      };
      wordOptionsContainer.appendChild(button);
    });
    wordSelectionModal.style.display = "flex";
  });

  socket.on("game:draw", (data) => {
    const { x0, y0, x1, y1, color, size } = data;
    const w = gameCanvas.clientWidth;
    const h = gameCanvas.clientHeight;
    if (w === 0 || h === 0) return;
    drawLine(x0 * w, y0 * h, x1 * w, y1 * h, color, size, false);
  });

  socket.on("game:roomsList", updateGameRoomList);
  socket.on("game:joined", (roomData) => {
    if (passwordPromptModal.style.display === "flex")
      passwordPromptModal.style.display = "none";
    switchRoom(roomData.id, `🎮 ${roomData.name}`, roomData.gameType);
    if (allUsersModal.style.display === "flex")
      allUsersModal.style.display = "none";
  });
  socket.on("game:join_error", (message) => {
    if (passwordPromptModal.style.display === "flex") {
      passwordError.textContent = message;
      passwordError.style.display = "block";
      joinPasswordInput.focus();
    } else {
      displayError(message);
    }
  });
  socket.on("game:state", (state) => {
    currentGameState = state;
    showGameContainer(state.gameType);
    updateGameButtonVisibility(state);
    if (state.gameType === "doodle") {
      renderDoodleState(state);
    } else if (state.gameType === "hangman") {
      renderHangmanState(state);
    }
  });

  socket.on("game:message", (text) => showGameOverlayMessage(text));
  socket.on("game:new_round", () => {
    if (currentGameState.gameType === "doodle") {
      currentDrawingHistory = [];
      ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    }
    showGameOverlayMessage("New Round!", 2000);
  });
  socket.on("game:correct_guess", ({ guesser, word }) => {
    showGameOverlayMessage(`✅ ${guesser.name} guessed it!`, 3000, "success");
    addMessage(
      {
        text: `${guesser.name} guessed the word! It was "${word}".`,
        isGameEvent: true,
      },
      "system"
    );
  });
  socket.on("game:end", (text) => {
    addMessage({ text, isGameEvent: true }, "system");
    endGame(false);
    updateGameButtonVisibility({ ...currentGameState, isRoundActive: false });
  });
  socket.on("game:over", ({ winner, scores }) => {
    showGameOverlayMessage(`🎉 ${winner.name} wins the game!`, 4000);
    showScoreboard(winner, scores);
    endGame(true);
  });
  socket.on("game:terminated", (message) => {
    showGameOverlayMessage(message, 3000);
    endGame();
    switchRoom("public", "🌐 Public Chat", "public");
  });

  socket.on("game:drawing_history", (history) => {
    currentDrawingHistory = history;
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    redrawFromHistory();
  });
  socket.on("game:clear_canvas", () => {
    currentDrawingHistory = [];
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  });

  // Call Listeners (Private)
  socket.on("call:incoming", async ({ from, offer }) => {
    if (isCallActive || incomingCallData) {
      return socket.emit("call:decline", { targetId: from.id, reason: "busy" });
    }
    console.log(`📞 Incoming call from ${from.name}`);
    incomingCallData = { from, offer };
    incomingCallFrom.textContent = from.name;
    incomingCallAvatar.innerHTML = renderAvatar(from);
    incomingCallModal.style.display = "flex";
  });
  socket.on("call:incoming", async ({ from, offer }) => {
    if (
      isCallActive ||
      incomingCallData ||
      privateRequestModal.style.display === "flex"
    ) {
      return socket.emit("call:decline", { targetId: from.id, reason: "busy" });
    }
    console.log(`📞 Incoming call from ${from.name}`);
    incomingCallData = { from, offer };
    incomingCallFrom.textContent = from.name;
    incomingCallAvatar.innerHTML = renderAvatar(from);
    incomingCallModal.style.display = "flex";
  });
  socket.on("call:answer_received", async ({ answer }) => {
    if (
      !peerConnections[callPartnerId] ||
      isMakingOffer[callPartnerId] === false
    )
      return;
    console.log("✅ Answer received");
    await peerConnections[callPartnerId].setRemoteDescription(
      new RTCSessionDescription(answer)
    );
    isMakingOffer[callPartnerId] = false;
  });
  socket.on("call:ice_candidate_received", async ({ candidate, fromId }) => {
    if (peerConnections[fromId]) {
      try {
        await peerConnections[fromId].addIceCandidate(candidate);
      } catch (e) {
        console.error("Error adding received ICE candidate", e);
      }
    }
  });
  socket.on("call:declined", ({ from, reason }) => {
    let message = `❌ ${from.name || "User"} declined the call.`;
    if (reason === "busy")
      message = `❌ ${from.name || "User"} is busy on another call.`;
    showGameOverlayMessage(message, 3000, "system");
    endCall(false);
  });
  socket.on("call:busy", ({ from }) => {
    showGameOverlayMessage(
      `❌ ${from.name} is currently busy.`,
      3000,
      "system"
    );
    endCall(false);
  });
  socket.on("call:error", (message) => {
    displayError(message);
    endCall(false);
  });
  socket.on("call:ended", ({ fromId }) => {
    showGameOverlayMessage(
      "The other user has ended the call.",
      2000,
      "system"
    );
    if (currentCallType === "private") {
      endCall(false);
    } else if (currentCallType === "group" && peerConnections[fromId]) {
      peerConnections[fromId].close();
      delete peerConnections[fromId];
      const videoContainer = document.getElementById(`video-${fromId}`);
      if (videoContainer) videoContainer.remove();
      updateVideoGridLayout();
    }
  });

  // Group Call Listeners
  socket.on("group-call:incoming", ({ group, caller, callType }) => {
    // Find the group name from the user's list of groups
    const localGroup = myGroups.find((g) => g._id === group.id);
    const groupName = localGroup ? localGroup.name : "a group";

    if (
      isCallActive ||
      incomingCallData ||
      privateRequestModal.style.display === "flex"
    )
      return; // User is busy

    incomingCallData = { group, caller, callType }; // Store incoming call data
    document.getElementById(
      "incomingGroupCallFrom"
    ).textContent = `${caller.name}`;
    document.getElementById(
      "incomingGroupCallStatus"
    ).textContent = `started a call in ${groupName}`;
    const avatarContainer = document.getElementById("incomingGroupCallAvatar");
    avatarContainer.innerHTML = renderAvatar(caller);

    document.getElementById("incomingGroupCallModal").style.display = "flex";
  });

  socket.on("group-call:all-participants", (participants) => {
    console.log("Existing participants:", participants);
    participants.forEach((participant) => {
      if (participant.id !== myId) {
        createPeerConnection(participant.id, true);
      }
    });
  });

  socket.on("group-call:new-participant", (participant) => {
    console.log("New participant joined:", participant);
    if (participant.id !== myId) {
      createPeerConnection(participant.id, false);
    }
  });

  socket.on("group-call:participant-left", ({ socketId, name }) => {
    showGameOverlayMessage(`${name} left the call.`, 2000, "system");
    if (peerConnections[socketId]) {
      peerConnections[socketId].close();
      delete peerConnections[socketId];
    }
    const videoContainer = document.getElementById(`video-${socketId}`);
    if (videoContainer) videoContainer.remove();
    updateVideoGridLayout();
  });

  socket.on("group-call:signal", async ({ senderId, signal }) => {
    const pc = peerConnections[senderId];
    if (!pc) {
      console.error("Peer connection not found for", senderId);
      return;
    }

    if (signal.sdp) {
      try {
        await pc.setRemoteDescription(new RTCSessionDescription(signal));
        if (signal.type === "offer") {
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          socket.emit("group-call:signal", {
            targetId: senderId,
            senderId: myId,
            signal: answer,
          });
        }
      } catch (error) {
        console.error("Error handling signal SDP:", error);
      }
    } else if (signal.candidate) {
      try {
        await pc.addIceCandidate(new RTCIceCandidate(signal.candidate));
      } catch (error) {
        console.error("Error adding ICE candidate:", error);
      }
    }
  });

  // File Transfer Listeners
  socket.on("file:request_incoming", ({ fromUser, file }) => {
    if (
      currentFileTransfer ||
      fileTransferRequestModal.style.display === "flex"
    ) {
      return socket.emit("file:decline", {
        targetId: fromUser.id,
        reason: "busy",
      });
    }
    incomingFileRequest = { fromUser, file };
    fileRequestInfo.innerHTML = `<b>${
      fromUser.name
    }</b> wants to send you a file:<br><i>${file.name}</i> (${(
      file.size /
      1024 /
      1024
    ).toFixed(2)} MB)`;
    fileTransferRequestModal.style.display = "flex";
  });
  socket.on("file:request_declined", ({ byUser, reason }) => {
    const message =
      reason === "busy"
        ? `${byUser.name} is busy and cannot accept the file now.`
        : `${byUser.name} declined the file transfer.`;
    showAlert("Transfer Declined", message, "info");
    cleanUpFileTransfer(byUser.id);
    fileTransferProgressModal.style.display = "none";
  });
  // FIX: Add the missing listener for when a file transfer request is accepted
  socket.on("file:request_accepted", async ({ byUser }) => {
    if (
      currentFileTransfer &&
      currentFileTransfer.status === "pending" &&
      currentFileTransfer.targetId === byUser.id
    ) {
      console.log(`✅ ${byUser.name} accepted the file transfer.`);
      // The sender (initiator) now creates the P2P connection
      await createP2PFileConnection(byUser.id, true);
    }
  });
  socket.on("file:signal", async ({ senderId, signal }) => {
    const pc = fileTransferConnections[senderId];
    if (!pc) return;
    if (signal.sdp) {
      await pc.setRemoteDescription(new RTCSessionDescription(signal));
      if (signal.type === "offer") {
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socket.emit("file:signal", {
          targetId: senderId,
          senderId: myId,
          signal: answer,
        });
      }
    } else if (signal.candidate) {
      await pc.addIceCandidate(new RTCIceCandidate(signal.candidate));
    }
  });
}

// --- CORE FUNCTIONS & PRIVATE CHAT ---
// ... (rest of functions remain largely the same, but with new feature integrations)
// The following functions are complete and include all original logic plus new feature logic.

function addMessage(msg) {
  const item = document.createElement("div");
  item.classList.add("msg");
  item.dataset.messageId = msg.messageId;

  const isMe = msg.userId === myUserId;
  const isSystem = msg.name === "System" || msg.isGameEvent;

  item.classList.add(isSystem ? "system" : isMe ? "me" : "other");

  let avatarHTML = "";
  if (!isMe && !isSystem) {
    avatarHTML = `<div class="msg-avatar">${renderAvatar(msg)}</div>`;
  }

  let contentHTML = "";
  const senderNameHTML =
    isSystem || isMe ? "" : `<span class="sender-name">${msg.name}</span>`;

  if (msg.audioData) {
    const audioBlob = new Blob(
      [
        new Uint8Array(
          atob(msg.audioData)
            .split("")
            .map((c) => c.charCodeAt(0))
        ),
      ],
      { type: "audio/webm" }
    );
    const audioUrl = URL.createObjectURL(audioBlob);
    contentHTML = `<div class="bubble">${senderNameHTML}<audio controls src="${audioUrl}"></audio></div>`;
  } else if (msg.file) {
    if (msg.fileType.startsWith("image/")) {
      contentHTML = `<div class="bubble">${senderNameHTML}<img src="${msg.file}" alt="${msg.fileName}" /></div>`;
    } else if (msg.fileType.startsWith("video/")) {
      contentHTML = `<div class="bubble">${senderNameHTML}<video src="${msg.file}" controls></video></div>`;
    } else {
      contentHTML = `<div class="bubble">${senderNameHTML}<a href="${msg.file}" download="${msg.fileName}">Download ${msg.fileName}</a></div>`;
    }
  } else {
    contentHTML = `<div class="bubble">${senderNameHTML}${msg.text}</div>`;
  }

  item.innerHTML = avatarHTML + contentHTML;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function updateSideBar() {
  updateGroupsList(groupsList);
  updateGroupsList(groupsListMobile);
  updateConnectedChatsList(connectedChatsList);
  updateConnectedChatsList(connectedChatsListMobile);
  updateUserList(userList);
  updateUserList(allUsersList);
}

function updateConnectedChatsList(container) {
  if (!container) return;
  container.innerHTML = "";
  const rooms = Object.keys(connectedRooms);
  if (rooms.length === 0) {
    container.parentElement.style.display = "none";
    return;
  }
  container.parentElement.style.display = "block";
  rooms.forEach((roomId) => {
    const user = connectedRooms[roomId].withUser;
    const div = document.createElement("div");
    div.className = "user connected-chat-item";
    div.dataset.userId = user.id;
    div.innerHTML = `<div class="user-avatar">${renderAvatar(
      user
    )}</div><div class="user-info"><div class="user-name">${
      user.name
    }</div></div><button class="disconnect-btn" data-room-id="${roomId}">Disconnect</button>`;
    div.onclick = (e) => {
      if (e.target.classList.contains("disconnect-btn")) {
        showDisconnectConfirm(roomId);
      } else {
        switchRoom(roomId, `🔒 Chat with ${user.name}`, "private");
      }
    };
    container.appendChild(div);
  });
}

function updateUserList(container) {
  if (!container) return;
  container.innerHTML = "";
  const publicBtn = document.createElement("div");
  publicBtn.className = "user public-room";
  publicBtn.innerHTML = `🌐 Public Room`;
  publicBtn.onclick = () => {
    switchRoom("public", "🌐 Public Chat", "public");
    if (allUsersModal.style.display === "flex") {
      allUsersModal.style.display = "none";
    }
  };
  container.appendChild(publicBtn);
  latestUsers.forEach((user) => {
    if (user.id === myId) return;
    const privateRoomId = [myUserId, user.userId].sort().join("-");
    if (connectedRooms[privateRoomId]) return;
    const div = document.createElement("div");
    div.className = "user";
    div.dataset.userId = user.id;
    if (pendingPrivateRequests[user.id]) {
      div.classList.add("pending");
    }
    if (recentlyDeclinedBy[user.id]) {
      div.classList.add("declined");
    }
    div.onclick = () => {
      if (div.classList.contains("declined")) {
        displayError(
          `${user.name} declined your last request. They must initiate the next chat.`
        );
        return;
      }
      if (div.classList.contains("pending")) {
        displayError("A private chat request is already pending.");
        return;
      }
      initiatePrivateChat(user);
    };

    div.innerHTML = `<div class="user-avatar">${renderAvatar(
      user
    )}</div><div class="user-info"><div class="user-name">${
      user.name
    }</div><div class="user-details"><span class="status-dot"></span><span>Online</span></div></div>`;
    container.appendChild(div);
  });
}

function switchRoom(roomId, title, roomType) {
  if (isCallActive) {
    displayError("Please end the current call before switching rooms.");
    return;
  }
  if (currentRoom.id === roomId) return;

  if (currentRoom.id && currentRoom.id.startsWith("game-")) {
    socket.emit("game:leave", currentRoom.id);
    endGame();
  }

  currentRoom = { id: roomId, type: roomType };
  if (roomType === "group") {
    const group = myGroups.find((g) => `group-${g._id}` === roomId);
    currentRoom.creator = group ? group.creator : null;
  } else {
    currentRoom.creator = null;
  }
  roomTitle.textContent = title;
  messages.innerHTML = "";
  typingIndicator.textContent = "";
  typingIndicator.style.opacity = "0";
  updateCallButtonVisibility();
  updateSideBar();

  socket.emit("join room", roomId);

  if (roomType === "doodle" || roomType === "hangman") {
    showGameContainer(roomType);
    if (roomType === "doodle") {
      setTimeout(setupCanvas, 50);
    }
  } else {
    endGame();
  }
  updateGameButtonVisibility({});
}

function generateColorFromId(id) {
  if (!id) return "#6b7280";
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return `hsl(${hash % 360}, 70%, 50%)`;
}

function adjustHeightForKeyboard() {
  if (window.innerWidth <= 768) {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  }
}

function displayError(msg) {
  errorMessage.textContent = msg;
  errorMessage.style.opacity = "1";
  setTimeout(() => {
    errorMessage.textContent = "";
    errorMessage.style.opacity = "0";
  }, 3000);
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  if (currentRoom.type === "doodle") {
    redrawFromHistory();
  }
}

function applyBackground(url) {
  if (url) {
    messages.style.backgroundImage = `url(${url})`;
    messages.classList.add("has-background");
    localStorage.setItem("chatBackground", url);
  } else {
    messages.style.backgroundImage = "none";
    messages.classList.remove("has-background");
    localStorage.removeItem("chatBackground");
  }
}

function populateBackgroundOptions(container) {
  if (!container) return;
  container.innerHTML = "";
  const defaultOption = document.createElement("div");
  defaultOption.className = "background-option background-option-default";
  defaultOption.innerHTML = "<span>Default</span>";
  defaultOption.onclick = () => applyBackground(null);
  container.appendChild(defaultOption);
  predefinedBackgrounds.forEach((url) => {
    const option = document.createElement("div");
    option.className = "background-option";
    option.style.backgroundImage = `url(${url})`;
    option.onclick = () => applyBackground(url);
    container.appendChild(option);
  });
}

function initiatePrivateChat(targetUser) {
  if (recentlyDeclinedBy[targetUser.id]) {
    displayError(
      `${targetUser.name} declined your last request. They must initiate the next chat.`
    );
    return;
  }
  if (pendingPrivateRequests[targetUser.id]) {
    displayError("You have already sent a request to this user.");
    return;
  }
  socket.emit("private:initiate", { targetId: targetUser.id });
  pendingPrivateRequests[targetUser.id] = true;
  updateSideBar();
  showGameOverlayMessage(
    `Requesting to chat with ${targetUser.name}...`,
    2000,
    "system"
  );
}

acceptRequestBtn.addEventListener("click", () => {
  if (incomingPrivateRequest) {
    socket.emit("private:accept", { requesterId: incomingPrivateRequest.id });
    privateRequestModal.style.display = "none";
    incomingPrivateRequest = null;
  }
});

declineRequestBtn.addEventListener("click", () => {
  if (incomingPrivateRequest) {
    socket.emit("private:decline", {
      requesterId: incomingPrivateRequest.id,
      reason: "declined",
    });
    privateRequestModal.style.display = "none";
    incomingPrivateRequest = null;
  }
});

function showDisconnectConfirm(roomId) {
  disconnectTarget = roomId;
  disconnectModal.style.display = "flex";
}
cancelDisconnectBtn.addEventListener("click", () => {
  disconnectModal.style.display = "none";
  disconnectTarget = null;
});
confirmDisconnectBtn.addEventListener("click", () => {
  if (disconnectTarget) {
    socket.emit("private:leave", { room: disconnectTarget });
    delete connectedRooms[disconnectTarget];
    if (currentRoom.id === disconnectTarget) {
      switchRoom("public", "🌐 Public Chat", "public");
    }
    updateSideBar();
  }
  disconnectModal.style.display = "none";
  disconnectTarget = null;
});

// --- GAME LOGIC ---
const openHowToPlayModal = () => {
  const gameType = currentGameState.gameType || "doodle";
  howToPlayTitle.textContent =
    gameType === "doodle"
      ? "✏️ How to Play Doodle Dash"
      : "🤔 How to Play Hangman";
  howToPlayRules.innerHTML =
    gameType === "doodle"
      ? `<ul>
          <li>One player is the 'Drawer' and is given a secret word to draw.</li>
          <li>Other players are 'Guessers' and must guess the word by typing in the chat.</li>
          <li>A correct guess wins 2 points for the guesser and 1 point for the drawer.</li>
          <li>The first player to reach 10 points is the champion!</li>
        </ul>`
      : `<ul>
          <li>This is a 2-player game. Players take turns guessing letters.</li>
          <li>Each player has <strong>20 seconds</strong> to make a guess. If time runs out, it counts as an incorrect guess.</li>
          <li>If you guess a correct letter, you get to guess again.</li>
          <li>If you guess an incorrect letter, your turn ends and the other player gets to guess.</li>
          <li>The player who correctly guesses the final letter to complete the word wins the round!</li>
        </ul>`;
  howToPlayModal.style.display = "flex";
};
howToPlayBtnDesktop.addEventListener("click", openHowToPlayModal);
howToPlayBtnMobile.addEventListener("click", openHowToPlayModal);
closeHowToPlayBtn.addEventListener(
  "click",
  () => (howToPlayModal.style.display = "none")
);
howToPlayModal.addEventListener("click", (e) => {
  if (e.target === howToPlayModal) howToPlayModal.style.display = "none";
});
function showGameOverlayMessage(text, duration = 2500, type = "info") {
  if (!gameOverlayMessage) return;
  gameOverlayMessage.textContent = text;
  gameOverlayMessage.className = "game-overlay-message";
  if (type === "system") {
    gameOverlayMessage.classList.add("system-overlay");
  } else if (type === "success") {
    gameOverlayMessage.classList.add("success-overlay");
  }
  gameOverlayMessage.classList.add("visible");
  clearTimeout(overlayTimer);
  overlayTimer = setTimeout(() => {
    gameOverlayMessage.classList.remove("visible");
  }, duration);
}
function updateRoundTimer(endTime) {
  clearInterval(roundCountdownInterval);
  if (!endTime) {
    gameTimer.style.display = "none";
    return;
  }
  gameTimer.style.display = "block";
  const update = () => {
    const timeLeft = Math.round((endTime - Date.now()) / 1000);
    if (timeLeft <= 0) {
      gameTimer.textContent = "0";
      clearInterval(roundCountdownInterval);
    } else {
      gameTimer.textContent = timeLeft;
    }
  };
  update();
  roundCountdownInterval = setInterval(update, 1000);
}
function updateHangmanTimer(endTime) {
  clearInterval(hangmanCountdownInterval);
  if (!endTime) {
    hangmanTimer.style.display = "none";
    return;
  }
  hangmanTimer.style.display = "block";
  const update = () => {
    const timeLeft = Math.round((endTime - Date.now()) / 1000);
    if (timeLeft <= 0) {
      hangmanTimer.textContent = "0";
      clearInterval(hangmanCountdownInterval);
    } else {
      hangmanTimer.textContent = timeLeft;
    }
  };
  update();
  hangmanCountdownInterval = setInterval(update, 1000);
}

function handleCreateGameRoom() {
  createGameModal.style.display = "flex";
  roomNameInput.focus();
}
createGameRoomBtnDesktop.addEventListener("click", handleCreateGameRoom);
createGameRoomBtnMobile.addEventListener("click", () => {
  if (allUsersModal.style.display === "flex")
    allUsersModal.style.display = "none";
  handleCreateGameRoom();
});
cancelCreateGameBtn.addEventListener(
  "click",
  () => (createGameModal.style.display = "none")
);
createGameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const roomName = roomNameInput.value.trim();
  const password = roomPasswordInput.value.trim();
  const gameType = createGameForm.gameType.value;
  if (roomName) {
    socket.emit("game:create", { roomName, password, gameType });
    createGameModal.style.display = "none";
    roomNameInput.value = "";
    roomPasswordInput.value = "";
  }
});
passwordPromptForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = joinPasswordInput.value;
  if (joiningRoomId && password) {
    socket.emit("game:join", { roomId: joiningRoomId, password });
    joinPasswordInput.value = "";
  }
});
cancelJoinBtn.addEventListener("click", () => {
  passwordPromptModal.style.display = "none";
  joiningRoomId = null;
  joinPasswordInput.value = "";
  passwordError.style.display = "none";
});
function handleStartGame() {
  if (currentRoom.id.startsWith("game-"))
    socket.emit("game:start", currentRoom.id);
}
startGameBtn.addEventListener("click", handleStartGame);
startGameBtnMobile.addEventListener("click", handleStartGame);
function handleStopGame() {
  if (currentRoom.id.startsWith("game-"))
    socket.emit("game:stop", currentRoom.id);
}
stopGameBtn.addEventListener("click", handleStopGame);
stopGameBtnMobile.addEventListener("click", handleStopGame);
clearCanvasBtn.addEventListener("click", () => {
  currentDrawingHistory = [];
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  socket.emit("game:clear_canvas", currentRoom.id);
});
function updateGameButtonVisibility(state) {
  const isCreator = state && state.creatorId === myId;
  const isGameRoom = currentRoom.id && currentRoom.id.startsWith("game-");
  const isGameActive = state && state.isRoundActive;
  startGameBtn.style.display = "none";
  startGameBtnMobile.style.display = "none";
  stopGameBtn.style.display = "none";
  stopGameBtnMobile.style.display = "none";
  if (isGameRoom && isCreator) {
    if (isGameActive) {
      stopGameBtn.style.display = "block";
      stopGameBtnMobile.style.display = "block";
    } else {
      startGameBtn.style.display = "block";
      startGameBtnMobile.style.display = "block";
      let canStart = false;
      if (state.gameType === "hangman") {
        canStart = state.players && state.players.length === 2;
      } else {
        canStart = state.players && state.players.length >= 2;
      }
      startGameBtn.disabled = !canStart;
      startGameBtnMobile.disabled = !canStart;
      if (!canStart) {
        const minPlayers = state.gameType === "hangman" ? 2 : 2;
        const infoElem =
          state.gameType === "doodle" ? gameInfo : hangmanGameInfo;
        if (infoElem) {
          infoElem.textContent = `Waiting for ${minPlayers} players to start...`;
        }
      }
    }
  }
  startGameBtn.classList.toggle("btn-start", !startGameBtn.disabled);
  startGameBtnMobile.classList.toggle(
    "btn-start",
    !startGameBtnMobile.disabled
  );
  stopGameBtn.classList.add("btn-danger");
  stopGameBtnMobile.classList.add("btn-danger");
}
function updateGameRoomList(rooms) {
  const renderList = (container) => {
    if (!container) return;
    container.innerHTML = "";
    if (rooms.length === 0) {
      container.innerHTML = '<p class="no-rooms-msg">No active game rooms.</p>';
      return;
    }
    rooms.forEach((room) => {
      const item = document.createElement("div");
      item.className = "game-room-item";
      const lockIcon = room.hasPassword ? "🔒 " : "";
      const gameIcon = room.gameType === "doodle" ? "✏️" : "🤔";
      item.innerHTML = `<span title="${room.name} (by ${room.creatorName})">${gameIcon} ${lockIcon}${room.name} (${room.players.length}p)</span><button data-room-id="${room.id}">Join</button>`;
      const joinBtn = item.querySelector("button");
      if (
        room.inProgress ||
        (room.gameType === "hangman" && room.players.length >= 2)
      ) {
        joinBtn.disabled = true;
        joinBtn.textContent = room.inProgress ? "Active" : "Full";
      }
      joinBtn.onclick = () => {
        if (room.hasPassword) {
          joiningRoomId = room.id;
          passwordError.style.display = "none";
          passwordPromptModal.style.display = "flex";
          joinPasswordInput.focus();
        } else {
          socket.emit("game:join", { roomId: room.id });
        }
      };
      container.appendChild(item);
    });
  };
  renderList(gameRoomListDesktop);
  renderList(gameRoomListMobile);
}
function showScoreboard(winner, scores) {
  scoreboardTitle.innerHTML = `🏆 ${winner.name} Wins!`;
  finalScores.innerHTML = "<h3>Final Scores:</h3>";
  const scoreList = document.createElement("ul");
  const sortedPlayerIds = Object.keys(scores).sort(
    (a, b) => scores[b] - scores[a]
  );
  sortedPlayerIds.forEach((playerId) => {
    const user = latestUsers.find((u) => u.id === playerId) || {
      name: "A player",
    };
    const scoreItem = document.createElement("li");
    scoreItem.innerHTML = `<span class="score-name">${user.name}</span><span class="score-points">${scores[playerId]} points</span>`;
    scoreList.appendChild(scoreItem);
  });
  finalScores.appendChild(scoreList);
  scoreboardModal.style.display = "flex";
}
function showGameContainer(gameType) {
  doodleGameContainer.style.display = gameType === "doodle" ? "flex" : "none";
  hangmanGameContainer.style.display = gameType === "hangman" ? "flex" : "none";
  input.placeholder =
    gameType === "hangman"
      ? "Guess a letter..."
      : "Type your message or guess...";
}
function endGame(hideContainers = true) {
  if (hideContainers) {
    doodleGameContainer.style.display = "none";
    hangmanGameContainer.style.display = "none";
  }
  if (gameInfo) gameInfo.textContent = "";
  if (drawingTools) drawingTools.style.display = "none";
  if (gameCanvas) gameCanvas.style.cursor = "default";
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  updateGameButtonVisibility({});
  updateRoundTimer(null);
  updateHangmanTimer(null);
  currentGameState = {};
  currentDrawingHistory = [];
  input.placeholder = "Type your message...";
}
function renderDoodleState(state) {
  if (state.isRoundActive) {
    const isDrawer = state.drawer && state.drawer.id === myId;
    gameInfo.textContent = isDrawer
      ? "Your turn to draw!"
      : `${state.drawer.name} is drawing...`;
    drawingTools.style.display = isDrawer ? "flex" : "none";
    gameCanvas.style.cursor = isDrawer ? "crosshair" : "not-allowed";
    input.disabled = isDrawer;
    input.placeholder = isDrawer
      ? "You are drawing..."
      : "Type your guess here!";
    if (state.roundEndTime) updateRoundTimer(state.roundEndTime);
  } else {
    updateRoundTimer(null);
    input.disabled = false;
    input.placeholder = "Type your message...";
    const isDrawer = state.drawer && state.drawer.id === myId;
    if (isDrawer && !state.word) {
      gameInfo.textContent = "Choose a word to draw!";
    } else if (state.creatorId === myId) {
      gameInfo.textContent = 'You are the host. Press "Start Game" when ready.';
    } else {
      const creator = latestUsers.find((u) => u.id === state.creatorId);
      gameInfo.textContent = `Waiting for ${
        creator ? creator.name : "the host"
      } to start the game.`;
    }
  }
}
function redrawFromHistory() {
  if (!ctx) return;
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  const w = gameCanvas.clientWidth;
  const h = gameCanvas.clientHeight;
  if (w === 0 || h === 0) return;
  currentDrawingHistory.forEach((data) => {
    const { x0, y0, x1, y1, color, size } = data;
    ctx.beginPath();
    ctx.moveTo(x0 * w, y0 * h);
    ctx.lineTo(x1 * w, y1 * h);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
  });
}
function setupCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rect = gameCanvas.getBoundingClientRect();
  gameCanvas.width = rect.width * dpr;
  gameCanvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  redrawFromHistory();
}
function drawLine(x0, y0, x1, y1, color, size, emit = false) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.closePath();

  if (!emit) return;

  const w = gameCanvas.clientWidth;
  const h = gameCanvas.clientHeight;
  if (w === 0 || h === 0) return;

  const drawData = {
    x0: x0 / w,
    y0: y0 / h,
    x1: x1 / w,
    y1: y1 / h,
    color: color,
    size: size,
  };
  currentDrawingHistory.push(drawData);
  socket.emit("game:draw", { room: currentRoom.id, data: drawData });
}

function handleStart(e) {
  if (
    currentGameState.isRoundActive &&
    currentGameState.drawer &&
    currentGameState.drawer.id === myId
  ) {
    isDrawing = true;
    const pos = getMousePos(e);
    [lastX, lastY] = [pos.x, pos.y];
  }
}
function handleMove(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const pos = getMousePos(e);
  drawLine(
    lastX,
    lastY,
    pos.x,
    pos.y,
    drawingConfig.color,
    drawingConfig.size,
    true
  );
  [lastX, lastY] = [pos.x, pos.y];
}
function handleEnd() {
  isDrawing = false;
}
function getMousePos(e) {
  const rect = gameCanvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return { x: clientX - rect.left, y: clientY - rect.top };
}
gameCanvas.addEventListener("mousedown", handleStart);
gameCanvas.addEventListener("mousemove", handleMove);
gameCanvas.addEventListener("mouseup", handleEnd);
gameCanvas.addEventListener("mouseout", handleEnd);
gameCanvas.addEventListener("touchstart", handleStart);
gameCanvas.addEventListener("touchmove", handleMove);
gameCanvas.addEventListener("touchend", handleEnd);
function renderHangmanState(state) {
  if (!state || !hangmanGameContainer) return;
  if (state.isRoundActive && state.turnEndTime) {
    updateHangmanTimer(state.turnEndTime);
  } else {
    updateHangmanTimer(null);
  }
  const displayWord = state.displayWord || [];
  hangmanWordDisplay.innerHTML = displayWord
    .map(
      (letter) =>
        `<div class="letter-placeholder ${letter === " " ? "space" : ""}">${
          letter !== "_" ? letter.toUpperCase() : ""
        }</div>`
    )
    .join("");

  const allGuessedLetters = [
    ...(state.incorrectGuesses || []),
    ...(state.correctGuesses || []),
  ];

  const incorrectGuesses = state.incorrectGuesses || [];
  hangmanIncorrectLetters.textContent = `Incorrect: ${incorrectGuesses
    .filter((g) => g.trim() !== "")
    .join(", ")
    .toUpperCase()}`;
  const incorrectCount = incorrectGuesses.length;
  hangmanDrawing.className = `incorrect-${incorrectCount}`;

  const isMyTurn = state.currentPlayerTurn === myId;
  input.disabled = true;
  if (state.isRoundActive && isMyTurn) {
    input.placeholder = "Your turn to guess a letter...";
  } else {
    input.placeholder = "Waiting for other player...";
  }
  input.disabled = !state.isRoundActive || !isMyTurn;

  if (state.isGameOver) {
    hangmanGameInfo.textContent = state.winner
      ? `🎉 ${state.winner.name} won!`
      : "😥 Game over!";
  } else if (state.isRoundActive) {
    const currentPlayer = latestUsers.find(
      (u) => u.id === state.currentPlayerTurn
    );
    hangmanGameInfo.textContent = isMyTurn
      ? "Your turn to guess!"
      : `Waiting for ${currentPlayer ? currentPlayer.name : "other player"}...`;
  } else {
    if (state.creatorId === myId) {
      hangmanGameInfo.textContent = 'Press "Start Game" when ready.';
    } else {
      const creator = latestUsers.find((u) => u.id === state.creatorId);
      hangmanGameInfo.textContent = `Waiting for ${
        creator ? creator.name : "the host"
      } to start the game.`;
    }
  }
}

// ===================================================================================
// --- 📞 VIDEO & AUDIO CALL (WEBRTC) IMPLEMENTATION ---
// ===================================================================================

function updateCallButtonVisibility() {
  const isPrivateChat = currentRoom.type === "private";
  const isGroupChat = currentRoom.type === "group";
  const canCall = (isPrivateChat || isGroupChat) && !isCallActive;

  startAudioCallBtn.style.display = canCall ? "inline-flex" : "none";
  startVideoCallBtn.style.display = canCall ? "inline-flex" : "none";
  manageGroupBtn.style.display =
    currentRoom.type === "group" && currentRoom.creator === myUserId
      ? "inline-flex"
      : "none";

  if (isCallActive) {
    input.placeholder = "Call in progress...";
    input.disabled = true;
  } else if (currentRoom.type !== "doodle" && currentRoom.type !== "hangman") {
    input.placeholder = "Type your message...";
    input.disabled = false;
  }
}

async function createPeerConnection(partnerSocketId, isInitiator) {
  if (peerConnections[partnerSocketId]) return;

  const pc = new RTCPeerConnection(peerConnectionConfig);
  peerConnections[partnerSocketId] = pc;
  isMakingOffer[partnerSocketId] = false;

  localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

  pc.onicecandidate = (event) => {
    if (event.candidate) {
      const signalType =
        currentCallType === "private"
          ? "call:ice_candidate"
          : "group-call:signal";
      const payload =
        currentCallType === "private"
          ? { targetId: partnerSocketId, candidate: event.candidate }
          : {
              targetId: partnerSocketId,
              senderId: myId,
              signal: { candidate: event.candidate },
            };
      socket.emit(signalType, payload);
    }
  };
  pc.ontrack = (event) => addRemoteStream(event.stream, partnerSocketId);
  pc.onconnectionstatechange = () => {
    if (["disconnected", "closed", "failed"].includes(pc.connectionState)) {
      if (peerConnections[partnerSocketId]) {
        peerConnections[partnerSocketId].close();
        delete peerConnections[partnerSocketId];
      }
      const videoContainer = document.getElementById(
        `video-${partnerSocketId}`
      );
      if (videoContainer) videoContainer.remove();
      updateVideoGridLayout();
    }
  };

  if (isInitiator) {
    try {
      isMakingOffer[partnerSocketId] = true;
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      const signalType =
        currentCallType === "private" ? "call:offer" : "group-call:signal";
      const payload =
        currentCallType === "private"
          ? { targetId: partnerSocketId, offer }
          : { targetId: partnerSocketId, senderId: myId, signal: offer };
      socket.emit(signalType, payload);
    } catch (error) {
      console.error("Error creating offer:", error);
    } finally {
      isMakingOffer[partnerSocketId] = false;
    }
  }
}

async function startMediaCall(constraints, isJoining = false) {
  if (isCallActive) return;

  currentCallType = currentRoom.type;

  if (currentCallType === "private") {
    const partnerInfo = connectedRooms[currentRoom.id]?.withUser;
    if (!partnerInfo) return displayError("Could not find a user to call.");
    callPartnerId = partnerInfo.id;
  } else if (currentCallType === "group") {
    // If we are NOT joining, it means we are the one starting the call.
    if (!isJoining) {
      const groupId = currentRoom.id.split("-")[1];
      // Emit the event to the server to notify other members.
      socket.emit("group-call:start", {
        groupId,
        callType: constraints.video ? "video" : "audio",
      });
      showGameOverlayMessage(`📞 Starting group call...`, 5000, "system");
    }
  } else {
    return; // Not a callable room type
  }

  isCallActive = true;
  updateCallButtonVisibility();

  try {
    localStream = await navigator.mediaDevices.getUserMedia(constraints);
    setupCallUI(constraints.video);

    if (currentCallType === "private") {
      showGameOverlayMessage(
        `📞 Calling ${connectedRooms[currentRoom.id].withUser.name}...`,
        5000,
        "system"
      );
      createPeerConnection(callPartnerId, true);
    } else if (currentCallType === "group") {
      // Everyone (initiator and joiners) must join the socket.io call room
      socket.emit("group-call:join", { roomId: currentRoom.id });
    }
  } catch (err) {
    console.error("Error starting call:", err);
    displayError("Could not start call. Check camera/mic permissions.");
    endCall(false);
  }
}

function setupCallUI(isVideoCall) {
  callContainer.classList.add("active");
  const partnerInfo = connectedRooms[currentRoom.id]?.withUser;
  callPartnerName.textContent =
    currentCallType === "group"
      ? roomTitle.textContent.replace("👥 ", "")
      : partnerInfo
      ? partnerInfo.name
      : "";
  callStatusIndicator.textContent =
    currentCallType === "private" ? "Calling..." : "Connected";
  callContainer.classList.toggle("audio-only", !isVideoCall);

  localVideo.srcObject = localStream;
  toggleVideoBtn.style.display = isVideoCall ? "flex" : "none";
  localVideo.classList.toggle("hidden", !isVideoCall);

  toggleMicBtn.classList.remove("mic-off");
  toggleVideoBtn.classList.remove("video-off");
}

function endCall(notifyPeer = true) {
  if (!isCallActive) return;

  if (notifyPeer) {
    if (currentCallType === "private" && callPartnerId) {
      socket.emit("call:end", { targetId: callPartnerId });
    } else if (currentCallType === "group") {
      socket.emit("group-call:leave", { roomId: currentRoom.id });
    }
  }

  Object.values(peerConnections).forEach((pc) => pc.close());
  peerConnections = {};
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    localStream = null;
  }

  videoGrid.innerHTML = "";
  isCallActive = false;
  callPartnerId = null;
  currentCallType = null;
  incomingCallData = null;

  callContainer.classList.remove("active");
  if (incomingCallModal.style.display === "flex")
    incomingCallModal.style.display = "none";

  showGameOverlayMessage("Call ended.", 2000, "system");
  updateCallButtonVisibility();
}

// --- CALL EVENT LISTENERS ---
startAudioCallBtn.addEventListener("click", () =>
  startMediaCall({ audio: true, video: false }, false)
);
startVideoCallBtn.addEventListener("click", () =>
  startMediaCall({ audio: true, video: true }, false)
);
endCallBtn.addEventListener("click", () => endCall(true));

// FIX: Add event listeners for the incoming group call modal buttons
document.getElementById("dismissGroupCallBtn").addEventListener("click", () => {
  document.getElementById("incomingGroupCallModal").style.display = "none";
  incomingCallData = null;
});

document
  .getElementById("joinGroupCallBtn")
  .addEventListener("click", async () => {
    if (!incomingCallData) return;
    const { group, callType } = incomingCallData;
    const groupId = group.id;
    document.getElementById("incomingGroupCallModal").style.display = "none";

    const localGroup = myGroups.find((g) => g._id === groupId);
    if (localGroup && currentRoom.id !== `group-${groupId}`) {
      switchRoom(`group-${groupId}`, `👥 ${localGroup.name}`, "group");
    }

    // Use a short timeout to ensure the room switch is processed before starting media
    setTimeout(() => {
      // We are JOINING, not initiating, so we pass 'true'
      startMediaCall({ audio: true, video: callType === "video" }, true);
    }, 100);

    incomingCallData = null;
  });

acceptCallBtn.addEventListener("click", async () => {
  if (!incomingCallData) return;
  const { from, offer } = incomingCallData;
  incomingCallModal.style.display = "none";

  const privateRoomId = [myUserId, from.userId].sort().join("-");
  if (!connectedRooms[privateRoomId]) {
    connectedRooms[privateRoomId] = { withUser: from };
    updateSideBar();
  }
  if (currentRoom.id !== privateRoomId) {
    switchRoom(privateRoomId, `🔒 Chat with ${from.name}`, "private");
  }

  callPartnerId = from.id;
  isCallActive = true;
  currentCallType = "private";
  updateCallButtonVisibility();

  const hasVideo = offer.sdp.includes("m=video");
  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: hasVideo,
    });
    setupCallUI(hasVideo);
    await createPeerConnection(callPartnerId, false);
    const pc = peerConnections[callPartnerId];
    await pc.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    socket.emit("call:answer", { targetId: from.id, answer });
  } catch (err) {
    console.error("Error accepting call:", err);
    displayError("Could not accept call. Check permissions.");
    endCall(true);
  } finally {
    incomingCallData = null;
  }
});

declineCallBtn.addEventListener("click", () => {
  if (incomingCallData) {
    socket.emit("call:decline", {
      targetId: incomingCallData.from.id,
      reason: "declined",
    });
    incomingCallModal.style.display = "none";
    incomingCallData = null;
  }
});

toggleMicBtn.addEventListener("click", () => {
  if (!localStream) return;
  const audioTrack = localStream.getAudioTracks()[0];
  if (audioTrack) {
    audioTrack.enabled = !audioTrack.enabled;
    toggleMicBtn.classList.toggle("mic-off", !audioTrack.enabled);
  }
});

toggleVideoBtn.addEventListener("click", () => {
  if (!localStream) return;
  const videoTrack = localStream.getVideoTracks()[0];
  if (videoTrack) {
    videoTrack.enabled = !videoTrack.enabled;
    toggleVideoBtn.classList.toggle("video-off", !videoTrack.enabled);
    localVideo.classList.toggle("hidden", !videoTrack.enabled);
  }
});

function addRemoteStream(stream, partnerId) {
  if (document.getElementById(`video-${partnerId}`)) return; // Already exists

  const partner = latestUsers.find((u) => u.id === partnerId);
  const partnerName = partner ? partner.name : "User";

  const container = document.createElement("div");
  container.className = "video-participant-container";
  container.id = `video-${partnerId}`;

  const video = document.createElement("video");
  video.srcObject = stream;
  video.autoplay = true;
  video.playsInline = true;

  const nameTag = document.createElement("span");
  nameTag.className = "participant-name-tag";
  nameTag.textContent = partnerName;

  container.appendChild(video);
  container.appendChild(nameTag);
  videoGrid.appendChild(container);
  updateVideoGridLayout();
}

function updateVideoGridLayout() {
  const count = videoGrid.children.length;
  let columns;
  if (count <= 1) columns = 1;
  else if (count <= 4) columns = 2;
  else if (count <= 9) columns = 3;
  else columns = 4;
  videoGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

// ===================================================================================
// --- 📁 P2P FILE TRANSFER IMPLEMENTATION ---
// ===================================================================================

async function createP2PFileConnection(partnerSocketId, isInitiator) {
  if (fileTransferConnections[partnerSocketId])
    return fileTransferConnections[partnerSocketId];

  const pc = new RTCPeerConnection(peerConnectionConfig);
  fileTransferConnections[partnerSocketId] = pc;

  pc.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit("file:signal", {
        targetId: partnerSocketId,
        senderId: myId,
        signal: { candidate: event.candidate },
      });
    }
  };

  if (isInitiator) {
    const dataChannel = pc.createDataChannel("file-transfer");
    pc.dataChannel = dataChannel;
    setupSenderDataChannel(dataChannel, partnerSocketId);

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    socket.emit("file:signal", {
      targetId: partnerSocketId,
      senderId: myId,
      signal: offer,
    });
  } else {
    pc.ondatachannel = (event) => {
      pc.dataChannel = event.channel;
      setupReceiverDataChannel(event.channel, partnerSocketId);
    };
  }
  return pc;
}

function initiateFileTransfer(targetId, file) {
  currentFileTransfer = {
    targetId,
    file,
    status: "pending",
  };
  socket.emit("file:request", {
    targetId,
    file: { name: file.name, size: file.size, type: file.type },
  });
  updateFileProgressUI("requesting", file);
  fileTransferProgressModal.style.display = "flex";
}

acceptFileBtn.addEventListener("click", async () => {
  if (!incomingFileRequest) return;
  const { fromUser, file } = incomingFileRequest;
  currentFileTransfer = {
    targetId: fromUser.id,
    file,
    status: "receiving",
  };
  fileTransferRequestModal.style.display = "none";
  updateFileProgressUI("receiving", file);
  fileTransferProgressModal.style.display = "flex";

  socket.emit("file:accept", { targetId: fromUser.id });
  await createP2PFileConnection(fromUser.id, false);
});

declineFileBtn.addEventListener("click", () => {
  if (incomingFileRequest) {
    socket.emit("file:decline", {
      targetId: incomingFileRequest.fromUser.id,
      reason: "declined",
    });
    incomingFileRequest = null;
    fileTransferRequestModal.style.display = "none";
  }
});

cancelFileTransferBtn.addEventListener("click", () => {
  if (currentFileTransfer && currentFileTransfer.targetId) {
    // You might want to send a cancel signal to the other peer here
    cleanUpFileTransfer(currentFileTransfer.targetId);
  }
  fileTransferProgressModal.style.display = "none";
});

function setupSenderDataChannel(channel, targetId) {
  const { file } = currentFileTransfer;
  updateFileProgressUI("sending", file);

  const highWaterMark = 1024 * 1024; // Buffer up to 1MB
  let offset = 0;
  const reader = new FileReader();

  const readSlice = (o) => {
    // Safety check to ensure the reader isn't busy
    if (reader.readyState === 1) return;
    const slice = file.slice(o, o + FILE_CHUNK_SIZE);
    reader.readAsArrayBuffer(slice);
  };

  reader.onload = (e) => {
    // FIX: Check if channel is still open before sending
    if (!currentFileTransfer || channel.readyState !== "open") return;

    try {
      channel.send(e.target.result);
      offset += e.target.result.byteLength;

      fileProgressBar.style.width = `${(offset / file.size) * 100}%`;
      fileProgressStatus.textContent = `Sent: ${(offset / 1024 / 1024).toFixed(
        2
      )} / ${(file.size / 1024 / 1024).toFixed(2)} MB`;

      if (offset < file.size) {
        // FIX: Don't call readSlice here directly. Let onbufferedamountlow handle it.
        if (channel.bufferedAmount < highWaterMark) {
          readSlice(offset);
        }
      } else {
        // Done sending
        channel.send(JSON.stringify({ done: true }));
        updateFileProgressUI("complete", file);
        showAlert("Success", "File sent successfully!", "success");
      }
    } catch (error) {
      console.error("File send error:", error);
      showAlert(
        "Transfer Failed",
        "An error occurred while sending the file.",
        "error"
      );
      cleanUpFileTransfer(targetId);
      fileTransferProgressModal.style.display = "none";
    }
  };

  // This event is the key to preventing the race condition
  channel.onbufferedamountlow = () => {
    if (offset < file.size) {
      readSlice(offset);
    }
  };

  channel.onopen = () => {
    // Send metadata and start the transfer
    channel.send(
      JSON.stringify({ name: file.name, size: file.size, type: file.type })
    );
    readSlice(0);
  };

  channel.onclose = () => {
    cleanUpFileTransfer(targetId);
  };
}

function setupReceiverDataChannel(channel, senderId) {
  let fileWriter;
  let receivedSize = 0;
  let fileMeta;
  let useFileSystemApi = "showSaveFilePicker" in window;

  // FIX: Always initialize the fileChunks array, just in case the user cancels the save dialog.
  fileChunks[senderId] = [];

  channel.onmessage = async (event) => {
    try {
      if (typeof event.data === "string") {
        const data = JSON.parse(event.data);
        if (data.done) {
          // Transfer is complete
          if (useFileSystemApi && fileWriter) {
            await fileWriter.close();
          } else if (fileChunks[senderId] && fileChunks[senderId].length > 0) {
            // Create a downloadable link for the in-memory file
            const fileBlob = new Blob(fileChunks[senderId], {
              type: fileMeta.type,
            });
            const downloadUrl = URL.createObjectURL(fileBlob);
            const downloadLink = document.createElement("a");
            downloadLink.href = downloadUrl;
            downloadLink.download = fileMeta.name;
            downloadLink.textContent = `Download ${fileMeta.name}`;

            fileDownloadLinkContainer.innerHTML = "";
            fileDownloadLinkContainer.appendChild(downloadLink);
          }
          updateFileProgressUI("complete", fileMeta);
          showAlert("Success", "File received successfully!", "success");
          return;
        } else {
          // This is the initial metadata message
          fileMeta = data;
          receivedSize = 0;

          if (useFileSystemApi) {
            try {
              const handle = await window.showSaveFilePicker({
                suggestedName: fileMeta.name,
              });
              fileWriter = (await handle.createWritable()).getWriter();
            } catch (err) {
              // User cancelled the save dialog. We'll fall back to the in-memory method.
              console.log(
                "User cancelled save dialog. Falling back to in-memory transfer."
              );
              useFileSystemApi = false; // Disable API for the rest of this transfer
            }
          }
        }
      } else {
        // This is a file chunk (ArrayBuffer)
        receivedSize += event.data.byteLength;
        if (useFileSystemApi && fileWriter) {
          await fileWriter.write(event.data);
        } else {
          // Store the chunk in memory
          fileChunks[senderId].push(event.data);
        }

        fileProgressBar.style.width = `${
          (receivedSize / fileMeta.size) * 100
        }%`;
        fileProgressStatus.textContent = `Received: ${(
          receivedSize /
          1024 /
          1024
        ).toFixed(2)} / ${(fileMeta.size / 1024 / 1024).toFixed(2)} MB`;
      }
    } catch (err) {
      console.error("Error receiving file:", err);
      showAlert(
        "Transfer Failed",
        err.message || "An error occurred while receiving the file.",
        "error"
      );
      if (useFileSystemApi && fileWriter) await fileWriter.abort();
      channel.close();
    }
  };

  channel.onclose = () => {
    if (useFileSystemApi && fileWriter && !fileWriter.closed) {
      fileWriter.abort();
    }
    cleanUpFileTransfer(senderId);
    if (fileTransferProgressModal.style.display === "flex") {
      fileTransferProgressModal.style.display = "none";
    }
  };
}

function updateFileProgressUI(status, file) {
  const fileName = file.name;
  const fileSize = (file.size / 1024 / 1024).toFixed(2) + " MB";

  fileProgressTitle.textContent =
    status === "sending"
      ? "Sending File"
      : status === "receiving"
      ? "Receiving File"
      : "File Transfer";
  fileProgressInfo.textContent = `${fileName} (${fileSize})`;
  fileProgressBar.style.width = "0%";
  fileProgressStatus.textContent =
    status === "requesting"
      ? "Waiting for response..."
      : status === "complete"
      ? "File saved successfully!"
      : "Initializing...";
  fileDownloadLinkContainer.style.display =
    status === "complete" && !("showSaveFilePicker" in window)
      ? "block"
      : "none";

  cancelFileTransferBtn.textContent =
    status === "complete" ? "Close" : "Cancel";
}

function cleanUpFileTransfer(partnerId) {
  if (fileTransferConnections[partnerId]) {
    fileTransferConnections[partnerId].close();
    delete fileTransferConnections[partnerId];
  }
  delete fileChunks[partnerId];
  currentFileTransfer = null;
}

// --- GROUP MANAGEMENT ---
manageGroupBtn.addEventListener("click", () => {
  if (currentRoom.type === "group") {
    showManageGroupModal(currentRoom.id.split("-")[1]);
  }
});

function showManageGroupModal(groupId) {
  const group = myGroups.find((g) => g._id === groupId);
  if (!group) {
    console.error("Could not find group to manage:", groupId);
    return;
  }

  manageGroupTitle.textContent = `Manage "${group.name}"`;

  currentGroupMembers.innerHTML = "";
  usersToAdd.innerHTML = "";

  const memberIds = new Set(group.members);

  const groupMembers = latestUsers.filter((u) => memberIds.has(u.userId));
  if (groupMembers.length === 0) {
    currentGroupMembers.innerHTML =
      "<p class='no-rooms-msg' style='text-align: left;'>No members found.</p>";
  } else {
    groupMembers.forEach((member) => {
      const item = document.createElement("div");
      item.className = "group-management-item";
      let removeBtn = "";
      if (member.userId !== myUserId) {
        removeBtn = `<button class="manage-member-btn btn-danger" data-user-id="${member.userId}">Remove</button>`;
      }
      item.innerHTML = `<div class="user-info"><div class="user-avatar" style="width: 32px; height: 32px;">${renderAvatar(
        member
      )}</div><span>${member.name}</span></div>${removeBtn}`;
      currentGroupMembers.appendChild(item);
    });
  }

  const nonMembers = latestUsers.filter(
    (u) => !memberIds.has(u.userId) && u.userId !== myUserId
  );
  if (nonMembers.length === 0) {
    usersToAdd.innerHTML =
      "<p class='no-rooms-msg' style='text-align: left;'>No new users to add.</p>";
  } else {
    nonMembers.forEach((user) => {
      const item = document.createElement("div");
      item.className = "group-management-item";
      item.innerHTML = `<div class="user-info"><div class="user-avatar" style="width: 32px; height: 32px;">${renderAvatar(
        user
      )}</div><span>${
        user.name
      }</span></div><button class="manage-member-btn btn-start" data-user-id="${
        user.userId
      }">Add</button>`;
      usersToAdd.appendChild(item);
    });
  }

  deleteGroupBtn.dataset.groupId = groupId;
  manageGroupModal.style.display = "flex";
}

closeManageGroupModalBtn.addEventListener(
  "click",
  () => (manageGroupModal.style.display = "none")
);

deleteGroupBtn.addEventListener("click", (e) => {
  const groupId = e.target.dataset.groupId;
  if (confirm("Are you sure you want to permanently delete this group?")) {
    socket.emit("group:delete", { groupId });
    manageGroupModal.style.display = "none";
  }
});

manageGroupModal.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("manage-member-btn")) {
    const userId = target.dataset.userId;
    const groupId = currentRoom.id.split("-")[1];
    if (target.classList.contains("btn-danger")) {
      socket.emit("group:remove_member", { groupId, userIdToRemove: userId });
    } else {
      socket.emit("group:add_member", { groupId, userIdToAdd: userId });
    }
  }
});

createGroupBtn.addEventListener("click", showCreateGroupModal);
createGroupBtnMobile.addEventListener("click", showCreateGroupModal);
cancelCreateGroupBtn.addEventListener(
  "click",
  () => (createGroupModal.style.display = "none")
);

function showCreateGroupModal() {
  allUsersModal.style.display = "none";
  groupUserSelectionList.innerHTML = "";
  groupMemberCount.textContent = "0/9 selected";
  latestUsers.forEach((user) => {
    if (user.id === myId) return;
    const label = document.createElement("label");
    label.innerHTML = `
            <input type="checkbox" value="${user.userId}">
            <div class="user-avatar">${renderAvatar(user)}</div>
            <span class="user-name">${user.name}</span>
        `;
    groupUserSelectionList.appendChild(label);
  });
  createGroupModal.style.display = "flex";
}

groupUserSelectionList.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const checkedCount =
      groupUserSelectionList.querySelectorAll("input:checked").length;
    groupMemberCount.textContent = `${checkedCount}/9 selected`;
    if (checkedCount >= 9) {
      groupUserSelectionList
        .querySelectorAll("input:not(:checked)")
        .forEach((input) => {
          input.disabled = true;
          input.parentElement.classList.add("disabled");
        });
    } else {
      groupUserSelectionList
        .querySelectorAll("input:not(:checked)")
        .forEach((input) => {
          input.disabled = false;
          input.parentElement.classList.remove("disabled");
        });
    }
  }
});

createGroupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const groupName = document.getElementById("groupNameInput").value.trim();
  if (!groupName) return displayError("Group name is required.");

  const selectedUsers = Array.from(
    groupUserSelectionList.querySelectorAll("input:checked")
  ).map((input) => input.value);

  if (selectedUsers.length === 0)
    return displayError("You must select at least one member.");

  if (selectedUsers.length > 9)
    return displayError("You can select a maximum of 9 members.");

  socket.emit("group:create", { name: groupName, memberIds: selectedUsers });
  createGroupModal.style.display = "none";
  createGroupForm.reset();
});

function updateGroupsList(container) {
  if (!container) return;
  container.innerHTML = "";

  container.parentElement.style.display = "block";

  if (myGroups.length === 0) {
    container.innerHTML =
      '<p class="no-rooms-msg" style="text-align: left; padding: 0; font-style: italic;">No groups yet.</p>';
    return;
  }

  myGroups.forEach((group) => {
    const div = document.createElement("div");
    div.className = "group-item";
    div.onclick = () =>
      switchRoom(`group-${group._id}`, `👥 ${group.name}`, "group");
    const initial = group.name.charAt(0).toUpperCase();
    const avatarColor = generateColorFromId(group._id);
    div.innerHTML = `
            <div class="user-avatar" style="background-color: ${avatarColor};">${initial}</div>
            <div class="user-info">
                <div class="group-name">${group.name}</div>
                <div class="group-details">${group.members.length} members</div>
            </div>
        `;
    container.appendChild(div);
  });
}

// --- PROFILE PICTURE MANAGEMENT ---
function handleAvatarSelection(fileInput, previewElement) {
  const file = fileInput.files[0];
  if (!file || !file.type.startsWith("image/")) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    previewElement.src = dataUrl;
    newProfilePictureDataUrl = dataUrl;
  };
  reader.readAsDataURL(file);
}

registerAvatarInput.addEventListener("change", () =>
  handleAvatarSelection(registerAvatarInput, registerAvatarPreview)
);
newAvatarInput.addEventListener("change", () =>
  handleAvatarSelection(newAvatarInput, newAvatarPreview)
);

const openProfileModal = () => {
  newAvatarPreview.src =
    myProfile.profilePicture ||
    "https://placehold.co/120x120/e5e7eb/4b5563?text=Avatar";
  newProfilePictureDataUrl = null;
  profilePictureModal.style.display = "flex";
};

changeAvatarBtn.addEventListener("click", openProfileModal);
changeAvatarBtnMobile.addEventListener("click", openProfileModal);

cancelAvatarChangeBtn.addEventListener("click", () => {
  profilePictureModal.style.display = "none";
});

saveAvatarChangeBtn.addEventListener("click", async () => {
  if (!newProfilePictureDataUrl) {
    return displayError("Please select a new image first.");
  }

  const token = localStorage.getItem("token");
  try {
    const response = await fetch(backendUrl + "/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ profilePicture: newProfilePictureDataUrl }),
    });

    if (response.ok) {
      showAlert("Success", "Profile picture updated!", "success");
      myProfile.profilePicture = newProfilePictureDataUrl;
      updateMyProfilePreview();
      profilePictureModal.style.display = "none";
    } else {
      const data = await response.json();
      showAlert("Error", data.message || "Failed to update picture.", "error");
    }
  } catch (err) {
    showAlert("Error", "Could not connect to the server.", "error");
  }
});

function renderAvatar(user) {
  if (user.profilePicture) {
    return `<img src="${user.profilePicture}" alt="${user.name.charAt(0)}">`;
  } else {
    const avatarColor = generateColorFromId(user.userId || user.id);
    const initial = (user.name || "U").charAt(0).toUpperCase();
    return `<div style="background-color: ${avatarColor}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">${initial}</div>`;
  }
}

function updateMyProfilePreview() {
  const profileHTML = `
        <div class="user-avatar">${renderAvatar(myProfile)}</div>
        <div class="user-info">
            <div class="user-name">${myProfile.name}</div>
        </div>
    `;
  myProfilePreview.innerHTML = profileHTML;
  myProfilePreviewMobile.innerHTML = profileHTML;
}

// --- AUDIO MESSAGE & EMOJI ---
recordAudioBtn.addEventListener("mousedown", startRecording);
recordAudioBtn.addEventListener("mouseup", stopRecording);
recordAudioBtn.addEventListener("mouseleave", stopRecording);
recordAudioBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  startRecording();
});
recordAudioBtn.addEventListener("touchend", (e) => {
  e.preventDefault();
  stopRecording();
});

async function startRecording() {
  if (isRecording) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    isRecording = true;
    recordAudioBtn.classList.add("recording");
    recordingIndicator.style.opacity = "1";
    audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });
  } catch (err) {
    console.error("Error accessing microphone:", err);
    displayError("Microphone access denied.");
  }
}

function stopRecording() {
  if (!isRecording || !mediaRecorder) return;
  mediaRecorder.stop();
  isRecording = false;
  recordAudioBtn.classList.remove("recording");
  recordingIndicator.style.opacity = "0";

  mediaRecorder.addEventListener("stop", () => {
    if (audioChunks.length === 0) return;
    const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      socket.emit("audio message", {
        room: currentRoom.id,
        audioData: base64String,
      });
      audioChunks = [];
    };
    if (mediaRecorder.stream) {
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    }
  });
}

emojiBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  emojiPicker.style.display =
    emojiPicker.style.display === "grid" ? "none" : "grid";
});

document.addEventListener("click", (e) => {
  if (
    e.target !== emojiBtn &&
    e.target !== emojiPicker &&
    !emojiPicker.contains(e.target)
  ) {
    emojiPicker.style.display = "none";
  }
});

function populateEmojiPicker() {
  if (emojiPicker.childElementCount > 0) return;
  const emojis = [
    "😀",
    "😂",
    "😍",
    "🤔",
    "😎",
    "😭",
    "😡",
    "👍",
    "👎",
    "❤️",
    "🔥",
    "🎉",
    "👋",
    "🙏",
    "👀",
    "💡",
    "🚀",
    "💯",
    "✅",
    "❌",
  ];
  emojis.forEach((emoji) => {
    const span = document.createElement("span");
    span.textContent = emoji;
    span.addEventListener("click", () => {
      input.value += emoji;
      input.focus();
    });
    emojiPicker.appendChild(span);
  });
}
