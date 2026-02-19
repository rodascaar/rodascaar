/* ============================================
   CHATBOT QA ASSISTANT - SIMPLE VERSION FOR GITHUB PAGES
   ============================================ */

// ============================================
// CONFIGURACIÓN DEL BACKEND
// ============================================
const CHATBOT_CONFIG = {
  // URL de tu backend API - Backend desplegado en CapRover
  apiEndpoint: 'https://carlos-bot-api.site.revelarte.studio/api/chat',
  
  // API key del cliente (configurada en el backend)
  clientApiKey: '25d0a2a8bbe1a1a19873791305088f6a',
  
  // Configuración de la petición
  apiConfig: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },
  
  // Timeout para la petición (ms)
  timeout: 15000,
  
  // Modo de operación: 'api' (con backend) o 'local' (respuestas locales)
  mode: 'auto'  // 'auto' intenta API, fallback a local si falla
};

// ============================================
// RESPUESTAS LOCALES (Fallback)
// ============================================
const LOCAL_RESPONSES = {
  'bienvenida': {
    message: `¡Hola! 👋 Soy el <strong>QA Assistant</strong> de Carlos Barrios.

Tengo <strong>7+ años de experiencia</strong> en automatización de pruebas y testing de APIs.

¿Qué te interesa saber?`,
    quickReplies: ['🧪 Automatización', '🔌 APIs', '🛠️ Herramientas', '📁 Proyectos', '💼 Experiencia']
  },
  
  'automatización': {
    message: `Carlos domina varias herramientas de <strong>automatización de pruebas</strong>:

🧪 <strong>Frameworks de Testing:</strong>
   • Selenium (Web automation)
   • Cypress (End-to-end testing)
   • Pytest (Python testing)
   • Jest (JavaScript testing)

🔌 <strong>API Testing:</strong>
   • Postman (principal)
   • Integraciones REST completas

💡 <strong>Impacto real:</strong> Ha reducido tiempos de pruebas regresivas hasta en un <span class="highlight">40%</span> en proyectos bancarios.

¿Quieres ver algún <a href="#projects" class="message-link">proyecto específico</a>?`,
    quickReplies: ['📁 Ver Proyectos', '🔌 APIs', '💼 Experiencia']
  },
  
  'apis': {
    message: `Carlos es <strong>especialista en testing de APIs</strong>:

🔌 <strong>Herramientas:</strong>
   • Postman (principal)
   • Testing de endpoints REST
   • Validación de respuestas JSON
   • Automatización de colecciones

🏦 <strong>Experiencia:</strong>
   • Validación de flujos de pago bancarios
   • Testing de integraciones con servicios internos
   • Monitoreo con Grafana

💡 <strong>Logro destacado:</strong> Implementación y validación del flujo completo de pago en canal digital del banco.

¿Te interesa saber sobre <a href="#experience" class="message-link">su experiencia</a>?`,
    quickReplies: ['💼 Experiencia', '🧪 Automatización', '📁 Proyectos']
  },
  
  'herramientas': {
    message: `Carlos trabaja con un stack completo de herramientas:

🛠️ <strong>Gestión & Metodologías:</strong>
   <span class="skill-tag">Jira</span>
   <span class="skill-tag">QMetry</span>
   <span class="skill-tag">Scrum</span>
   <span class="skill-tag">Git</span>

🗄️ <strong>Bases de Datos & Monitoreo:</strong>
   <span class="skill-tag">Oracle</span>
   <span class="skill-tag">PostgreSQL</span>
   <span class="skill-tag">Grafana</span>

💻 <strong>Desarrollo & IA:</strong>
   <span class="skill-tag">Python</span>
   <span class="skill-tag">TypeScript</span>
   <span class="skill-tag">React</span>
   <span class="skill-tag">Go</span>
   <span class="skill-tag">Astro</span>
   <span class="skill-tag">Ollama</span>
   <span class="skill-tag">Claude Code</span>

¿Quieres ver cómo aplica estas tecnologías en sus <a href="#projects" class="message-link">proyectos</a>?`,
    quickReplies: ['📁 Proyectos', '🧪 Automatización', '💼 Experiencia']
  },
  
  'proyectos': {
    message: `Carlos ha trabajado en proyectos impactantes:

🏦 <strong>Validación de Flujo de Pago</strong>
   • Canal digital de banco
   • Transacciones <span class="highlight">100% seguras</span>
   • Integración de múltiples servicios

🔌 <strong>Testing de Integraciones API</strong>
   • Servicios internos del banco
   • Seguridad y estabilidad garantizada
   • Comunicaciones entre sistemas

📸 <strong>Revelarte.Studio</strong>
   • Galería fotográfica profesional
   • E-commerce premium
   • Stack: Astro, TypeScript, CSS3

🛒 <strong>Tiendas Online Híbridas</strong>
   • Integración REAL de pagos
   • Sistema WhatsApp híbrido
   • <span class="highlight">3x más económico</span> que agencias

¿Te interesa saber sobre su <a href="#experience" class="message-link">experiencia</a>?`,
    quickReplies: ['💼 Experiencia', '🧪 Automatización', '🔌 APIs']
  },
  
  'experiencia': {
    message: `La experiencia más destacada de Carlos fue en <strong>ITAE (2022-2025)</strong>:

🏦 <strong>Analista QA</strong>
   • Diseño y ejecución de pruebas funcionales y de regresión
   • Consultas avanzadas en Oracle y PostgreSQL
   • Pruebas de APIs con Postman
   • Monitoreo con Grafana y revisión de logs
   • Gestión de bugs y test cases en Jira + QMetry
   • Metodología de trabajo: Scrum

💡 <strong>Impacto:</strong> Aportó valor en todo el ciclo de desarrollo, desde la planificación hasta la entrega, asegurando calidad y trazabilidad.

¿Te interesa saber sobre sus <a href="#skills" class="message-link">herramientas</a>?`,
    quickReplies: ['🛠️ Herramientas', '🧪 Automatización', '📁 Proyectos']
  },
  
  'contacto': {
    message: `Puedes contactar a Carlos por:

📧 <strong>Email:</strong> <a href="mailto:carlosbarriosr@proton.me" class="message-link">carlosbarriosr@proton.me</a>
💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rodascaar/" target="_blank" class="message-link">linkedin.com/in/rodascaar</a>
🐙 <strong>GitHub:</strong> <a href="https://github.com/rodascaar" target="_blank" class="message-link">github.com/rodascaar</a>
💬 <strong>WhatsApp:</strong> [Botón directo]

📄 También puedes descargar su CV completo <a href="cv_Carlos_Barrios.pdf" download class="message-link">aquí</a>.

¿Hay algo más en lo que pueda ayudarte?`,
    quickReplies: ['🧪 Automatización', '🔌 APIs', '📁 Proyectos']
  },
  
  'default': {
    message: `No estoy seguro de entender esa pregunta. 😅

Puedo ayudarte con información sobre:
   • 🧪 Automatización de pruebas
   • 🔌 Testing de APIs
   • 🛠️ Herramientas y tecnologías
   • 📁 Proyectos destacados
   • 💼 Experiencia profesional
   • 📞 Información de contacto

¿Qué te interesa saber?`,
    quickReplies: ['🧪 Automatización', '🔌 APIs', '🛠️ Herramientas', '📁 Proyectos']
  }
};

// ============================================
// CLASE PRINCIPAL DEL CHATBOT
// ============================================
class QAAssistant {
  constructor() {
    this.isOpen = false;
    this.isTyping = false;
    this.messages = [];
    this.init();
  }

  // ============================================
  // FUNCIÓN LINKIFY - Convertir URLs en enlaces clickeables
  // ============================================
  linkify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, '<a href="$1" target="_blank" class="message-link">$1</a>');
  }

  // ============================================
  // PROCESAR CONTENIDO DE MENSAJE - Markdown + Linkify
  // ============================================
  processMessageContent(text) {
    // Primero aplicar linkify para convertir URLs sueltas en enlaces
    // Esto debe hacerse ANTES de Markdown para evitar procesar URLs ya formateadas
    let processed = this.linkify(text);
    
    // Luego convertir Markdown a HTML si marked está disponible
    processed = typeof marked !== 'undefined' ? marked.parse(processed) : processed;
    
    return processed;
  }

  // ============================================
  // ORDENAR MENSAJES POR TIMESTAMP
  // ============================================
  sortMessagesByTimestamp() {
    this.messages.sort((a, b) => {
      const timeA = a.timestamp || 0;
      const timeB = b.timestamp || 0;
      return timeA - timeB;
    });
  }

  init() {
    this.createChatbotUI();
    this.attachEventListeners();
    this.checkConnection();
  }

  // Crear la UI del chatbot
  createChatbotUI() {
    // Botón trigger
    const trigger = document.createElement('div');
    trigger.className = 'chatbot-trigger';
    trigger.id = 'bot-launcher'; // ID específico para manipulación independiente
    trigger.innerHTML = '<i class="fas fa-robot"></i>';
    document.body.appendChild(trigger);

    // Ventana del chatbot
    const window = document.createElement('div');
    window.className = 'chatbot-window';
    window.id = 'chatbotWindow';
    window.innerHTML = `
      <div class="chatbot-header">
        <div class="robot-avatar">
          <svg class="robot-svg" viewBox="0 0 50 50">
            <!-- Antena -->
            <line class="robot-antenna" x1="25" y1="8" x2="25" y2="2" stroke="#14b8a6" stroke-width="2"/>
            <circle class="robot-antenna" cx="25" cy="2" r="2" fill="#14b8a6"/>
            
            <!-- Cabeza -->
            <g class="robot-head">
              <rect x="10" y="10" width="30" height="25" rx="5" fill="none" stroke="#3b82f6" stroke-width="2"/>
              
              <!-- Ojos -->
              <circle class="robot-eye" cx="18" cy="20" r="4" fill="#3b82f6"/>
              <circle class="robot-eye" cx="32" cy="20" r="4" fill="#3b82f6"/>
              <circle cx="19" cy="19" r="1.5" fill="white"/>
              <circle cx="33" cy="19" r="1.5" fill="white"/>
              
              <!-- Boca -->
              <path class="robot-mouth" d="M 18 32 Q 25 36 32 32" fill="none" stroke="#14b8a6" stroke-width="2"/>
            </g>
            
            <!-- Cuerpo -->
            <rect x="15" y="36" width="20" height="12" rx="3" fill="none" stroke="#3b82f6" stroke-width="2"/>
          </svg>
        </div>
        <div class="chatbot-info">
          <h4>QA Assistant</h4>
          <span class="status">En línea</span>
        </div>
        <button class="chatbot-close" id="chatbotClose">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="connection-status connected" id="connectionStatus">
        <i class="fas fa-wifi"></i>
        <span>Conectado</span>
      </div>
      
      <div class="chatbot-messages" id="chatbotMessages">
        <!-- Los mensajes se agregarán aquí -->
      </div>
      
      <div class="quick-replies" id="quickReplies">
        <!-- Quick replies se agregarán aquí -->
      </div>
      
      <div class="chatbot-input-container">
        <div class="chatbot-input-wrapper">
          <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Escribe tu pregunta..." autocomplete="off" spellcheck="false">
          <button class="chatbot-send" id="chatbotSend">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(window);
  }

  // Adjuntar event listeners
  attachEventListeners() {
    // Toggle chatbot
    document.getElementById('bot-launcher').addEventListener('click', () => this.toggle());
    document.getElementById('chatbotClose').addEventListener('click', () => this.close());

    // Enviar mensaje
    document.getElementById('chatbotSend').addEventListener('click', () => this.sendMessage());
    document.getElementById('chatbotInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    // Quick replies
    document.getElementById('quickReplies').addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-reply-btn')) {
        const text = e.target.textContent.trim();
        this.handleQuickReply(text);
      }
    });
  }

  // Toggle del chatbot
  toggle() {
    this.isOpen = !this.isOpen;
    const window = document.getElementById('chatbotWindow');
    
    if (this.isOpen) {
      window.classList.add('active');
      if (this.messages.length === 0) {
        this.showWelcomeMessage();
      }
    } else {
      window.classList.remove('active');
    }
  }

  close() {
    this.isOpen = false;
    document.getElementById('chatbotWindow').classList.remove('active');
  }

  // Mostrar mensaje de bienvenida
  showWelcomeMessage() {
    const response = LOCAL_RESPONSES['bienvenida'];
    this.addBotMessage(response.message, response.quickReplies);
  }

  // Manejar quick reply
  handleQuickReply(text) {
    // Mapear quick replies a claves de respuestas
    const keyMap = {
      '🧪 Automatización': 'automatización',
      '🔌 APIs': 'apis',
      '🛠️ Herramientas': 'herramientas',
      '📁 Proyectos': 'proyectos',
      '💼 Experiencia': 'experiencia',
      '📞 Contacto': 'contacto'
    };

    const key = keyMap[text] || 'default';
    this.processUserMessage(text, key);
  }

  // Enviar mensaje del usuario
  sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    
    if (!message || this.isTyping) return;

    this.addUserMessage(message);
    input.value = '';

    // Procesar el mensaje
    this.processMessage(message);
  }

  // Agregar mensaje del usuario
  addUserMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.innerHTML = `<div class="message-content">${this.escapeHtml(message)}</div>`;
    messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  // ============================================
  // RENDERIZAR TODOS LOS MENSAJES ORDENADOS
  // ============================================
  renderAllMessages() {
    this.sortMessagesByTimestamp();
    const container = document.getElementById('chatbotMessages');
    container.innerHTML = '';  // Limpiar contenedor
    
    this.messages.forEach(msg => {
      if (msg.role === 'user') {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'user-message';
        messageDiv.innerHTML = `<div class="message-content">${this.escapeHtml(msg.content)}</div>`;
        container.appendChild(messageDiv);
      } else {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'bot-message';
        messageDiv.innerHTML = `
          <div class="bot-avatar-small">
            <svg viewBox="0 0 50 50" style="width: 18px; height: 18px;">
              <rect x="10" y="10" width="30" height="25" rx="5" fill="none" stroke="white" stroke-width="2"/>
              <circle cx="18" cy="20" r="4" fill="white"/>
              <circle cx="32" cy="20" r="4" fill="white"/>
            </svg>
          </div>
          <div class="message-content">${this.processMessageContent(msg.content)}</div>
        `;
        container.appendChild(messageDiv);
      }
    });
    this.scrollToBottom();
  }

  // Agregar mensaje del bot
  addBotMessage(message, quickReplies = []) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.innerHTML = `
      <div class="bot-avatar-small">
        <svg viewBox="0 0 50 50" style="width: 18px; height: 18px;">
          <rect x="10" y="10" width="30" height="25" rx="5" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="18" cy="20" r="4" fill="white"/>
          <circle cx="32" cy="20" r="4" fill="white"/>
        </svg>
      </div>
      <div class="message-content">${this.processMessageContent(message)}</div>
    `;
    messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();

    // Mostrar quick replies si hay
    this.showQuickReplies(quickReplies);
  }

  // Mostrar indicador de escribiendo
  showTypingIndicator() {
    this.isTyping = true;
    const messagesContainer = document.getElementById('chatbotMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
      <div class="bot-avatar-small">
        <svg viewBox="0 0 50 50" style="width: 18px; height: 18px;">
          <rect x="10" y="10" width="30" height="25" rx="5" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="18" cy="20" r="4" fill="white"/>
          <circle cx="32" cy="20" r="4" fill="white"/>
        </svg>
      </div>
      <div class="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();

    // Animar robot pensando
    document.querySelector('.robot-svg')?.classList.add('robot-thinking');
  }

  // Ocultar indicador de escribiendo
  hideTypingIndicator() {
    this.isTyping = false;
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
    document.querySelector('.robot-svg')?.classList.remove('robot-thinking');
  }

  // Mostrar quick replies
  showQuickReplies(replies) {
    const container = document.getElementById('quickReplies');
    container.innerHTML = '';
    
    replies.forEach(reply => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.textContent = reply;
      container.appendChild(btn);
    });
  }

  // Procesar mensaje del usuario
  async processMessage(message) {
    this.showTypingIndicator();

    try {
      let response;
      let useLocal = false;

      if (CHATBOT_CONFIG.mode === 'auto' || CHBOT_CONFIG.mode === 'api') {
        // Intentar usar backend API
        try {
          response = await this.callBackendAPI(message);
        } catch (apiError) {
          console.warn('API Error, usando modo local:', apiError);
          useLocal = true;
        }
      }
      
      if (useLocal || CHATBOT_CONFIG.mode === 'local') {
        // Usar respuestas locales
        response = this.getLocalResponse(message);
      }

      this.hideTypingIndicator();
      this.addBotMessage(response.message, response.quickReplies);

      // Animar robot hablando
      this.animateRobotTalking();

    } catch (error) {
      this.hideTypingIndicator();
      this.addBotMessage('Lo siento, hubo un error al procesar tu mensaje. Por favor intenta nuevamente.');
      console.error('Error:', error);
    }
  }

  // Procesar mensaje con clave específica (para quick replies)
  async processUserMessage(message, key) {
    this.addUserMessage(message);
    this.showTypingIndicator();

    try {
      let response;
      let useLocal = false;

      if (CHATBOT_CONFIG.mode === 'auto' || CHBOT_CONFIG.mode === 'api') {
        // Intentar usar backend API
        try {
          response = await this.callBackendAPI(message);
        } catch (apiError) {
          console.warn('API Error, usando modo local:', apiError);
          useLocal = true;
        }
      }
      
      if (useLocal || CHATBOT_CONFIG.mode === 'local') {
        response = LOCAL_RESPONSES[key] || LOCAL_RESPONSES['default'];
      }

      this.hideTypingIndicator();
      this.addBotMessage(response.message, response.quickReplies);
      this.animateRobotTalking();

    } catch (error) {
      this.hideTypingIndicator();
      this.addBotMessage('Lo siento, hubo un error. Por favor intenta nuevamente.');
      console.error('Error:', error);
    }
  }

  // Obtener respuesta local
  getLocalResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar coincidencias
    if (lowerMessage.includes('automatización') || lowerMessage.includes('automatizar') || lowerMessage.includes('testing')) {
      return LOCAL_RESPONSES['automatización'];
    } else if (lowerMessage.includes('api') || lowerMessage.includes('endpoint') || lowerMessage.includes('rest')) {
      return LOCAL_RESPONSES['apis'];
    } else if (lowerMessage.includes('herramienta') || lowerMessage.includes('stack') || lowerMessage.includes('tecnología')) {
      return LOCAL_RESPONSES['herramientas'];
    } else if (lowerMessage.includes('proyecto') || lowerMessage.includes('trabajo') || lowerMessage.includes('realizaste')) {
      return LOCAL_RESPONSES['proyectos'];
    } else if (lowerMessage.includes('experiencia') || lowerMessage.includes('trabajas') || lowerMessage.includes('itae')) {
      return LOCAL_RESPONSES['experiencia'];
    } else if (lowerMessage.includes('contacto') || lowerMessage.includes('email') || lowerMessage.includes('hablar')) {
      return LOCAL_RESPONSES['contacto'];
    }
    
    return LOCAL_RESPONSES['default'];
  }

  // Llamar al backend API
  async callBackendAPI(message) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CHATBOT_CONFIG.timeout);

    try {
      const response = await fetch(CHATBOT_CONFIG.apiEndpoint, {
        ...CHATBOT_CONFIG.apiConfig,
        body: JSON.stringify({
          message: message,
          conversationHistory: this.messages.slice(-10),
          client_api_key: CHATBOT_CONFIG.clientApiKey
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Guardar mensaje en historial con timestamp
      const timestamp = Date.now();
      this.messages.push({
        role: 'user',
        content: message,
        timestamp: timestamp
      });
      this.messages.push({
        role: 'assistant',
        content: data.message,
        timestamp: timestamp + 1  // +1 para asegurar orden correcto
      });

      return {
        message: data.message,
        quickReplies: data.quick_replies || []
      };

    } catch (error) {
      clearTimeout(timeoutId);
      console.error('API Error:', error);
      
      // Fallback a respuestas locales si falla la API
      return this.getLocalResponse(message);
    }
  }

  // Animar robot hablando
  animateRobotTalking() {
    const robotSvg = document.querySelector('.robot-svg');
    if (robotSvg) {
      robotSvg.classList.add('robot-talking');
      setTimeout(() => {
        robotSvg.classList.remove('robot-talking');
      }, 2000);
    }
  }

  // Verificar estado de conexión
  async checkConnection() {
    const statusEl = document.getElementById('connectionStatus');
    
    if (CHATBOT_CONFIG.mode === 'api') {
      statusEl.className = 'connection-status connecting';
      statusEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Conectando...</span>';

      try {
        const response = await fetch(CHATBOT_CONFIG.apiEndpoint.replace('/chat', '/health'), {
          method: 'GET',
          signal: AbortSignal.timeout(5000)
        });

        if (response.ok) {
          statusEl.className = 'connection-status connected';
          statusEl.innerHTML = '<i class="fas fa-wifi"></i><span>Conectado</span>';
        } else {
          throw new Error('Connection failed');
        }
      } catch (error) {
        statusEl.className = 'connection-status disconnected';
        statusEl.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Modo local</span>';
      }
    } else {
      statusEl.className = 'connection-status connected';
      statusEl.innerHTML = '<i class="fas fa-wifi"></i><span>Modo local</span>';
    }
  }

  // Scroll al final de los mensajes
  scrollToBottom() {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  // Escapar HTML para prevenir XSS
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// ============================================
// INICIALIZAR CHATBOT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  window.qaAssistant = new QAAssistant();
});

// ============================================
// EXPORTAR PARA USO EXTERNO
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QAAssistant, CHATBOT_CONFIG };
}
