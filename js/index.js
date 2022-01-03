jQuery('document').ready(function()
{
    var B = true;
    jQuery('._Nav').on('click', function()
    {
        if(B)
        {
            B = false;
            jQuery(".__Nav").css("display", "block");       
        }
        else
        {
            B = true;
            jQuery(".__Nav").css("display", "none"); 
        }
    });
    
    jQuery('section').on('click', function()
    {
        if(!B)
        {
            B = true;
            jQuery(".__Nav").css("display", "none"); 
        }
    });
    
    document.querySelectorAll(".img-wrapper").forEach(button => {
        if (button.hasAttribute("data-bs-target") && button.getAttribute("data-bs-target") == "#modal-img")
            button.onclick = () => {
                let modal = document.querySelector("#modal-img .modal-body");
                while (modal.firstChild) {
                    modal.removeChild(modal.firstChild);
                }
                modal.appendChild(button.firstChild.cloneNode());

                let title = document.querySelector("#modal-img .modal-title");
                title.textContent = button.firstChild.alt;
            }
    });
});
