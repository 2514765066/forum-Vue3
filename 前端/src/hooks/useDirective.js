export const vSrc = (el, binding) => {
	el.style.backgroundSize = "cover";
	el.style.backgroundPosition = "center";
	el.style.backgroundRepeat = "no-repeat";
	el.style.backgroundImage = `url(${binding.value})`;	
};
