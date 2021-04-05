package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Handler struct{}

// Will hold services that will be injected into the handler layer
type Config struct {
	R *gin.Engine
}

func NewHandler(c *Config) {
	h := &Handler{}

	g := c.R.Group("/api/auth")

	g.GET("/me", h.Me)
	g.GET("/signin", h.SignIn)
	g.GET("/signup", h.SignUp)
	g.GET("/signout", h.SignOut)
	g.GET("/token", h.Token)

}

func (h *Handler) Me(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"auth": "profile",
	})
}

func (h *Handler) SignUp(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"auth": "singup",
	})
}

func (h *Handler) SignIn(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"auth": "singin",
	})
}

func (h *Handler) SignOut(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"auth": "signout",
	})
}

func (h *Handler) Token(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"auth": "token",
	})
}
