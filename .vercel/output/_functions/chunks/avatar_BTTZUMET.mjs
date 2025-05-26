const avatar = new Proxy({"src":"/_astro/avatar.BNSVnaJJ.jpeg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kyun/dev/PortfolioSite/src/assets/avatar.jpeg";
							}
							
							return target[name];
						}
					});

export { avatar as a };
