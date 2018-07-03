export const router = {
    getUrl() {
        return window.location.hash.slice(1);
    },
    navigate( hash ) {
    		console.log(1)
    		window.location.hash = hash
    }
}