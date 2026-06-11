
//JavaScript para el menú colapsable y WhatsApp>
    // Menú colapsable
    (function() {
        const checkbox = document.getElementById('menu-checkbox');
        const sidebar = document.getElementById('sidebar');
        if (checkbox && sidebar) {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    sidebar.classList.add('sidebar--collapsed');
                } else {
                    sidebar.classList.remove('sidebar--collapsed');
                }
            });
        }
    })();
    // Formulario que envía a WhatsApp
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('whatsapp_nombre').value;
            const email = document.getElementById('whatsapp_email').value;
            const telefono = document.getElementById('whatsapp_telefono').value;
            const mensaje = document.getElementById('whatsapp_mensaje').value;
            // Construir el mensaje para WhatsApp
            let texto = `*Nuevo mensaje desde Syntex*%0A%0A`;
            texto += `*Nombre:* ${nombre}%0A`;
            texto += `*Email:* ${email}%0A`;
            if(telefono) texto += `*Teléfono:* ${telefono}%0A`;
            texto += `*Mensaje:* ${mensaje}`;
            window.open(`https://wa.me/81262940?text=${texto}`, '_blank');
            alert('Serás redirigido a WhatsApp para enviar el mensaje');
            this.reset();
        });
    }