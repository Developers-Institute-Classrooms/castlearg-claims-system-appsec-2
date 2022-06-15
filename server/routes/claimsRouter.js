const express = require("express");
const router = express.Router();
const claimRepository = require("../data-access/claimRepository");
const approverScopes = require("../middleware/scopes")


router.get("/:claimId", async (req, res, next) => {
    try {
        const claims = await claimRepository.getClaims(userId);
        res.json(claims);
    } catch (err) {
        next()
    }
});

router.get("/", async (req, res, next) => {
    try {
        const claims = await claimRepository.getClaims();
        res.json(claims);
    } catch (err) {
        next()
    }
});

router.put("/:claimId", approverScopes, async (req, res, next) => {
    try {
        const claims = await claimRepository.get();
        res.json(claims);
    } catch (err) {
        next()
    }
});

module.exports = router;