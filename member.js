function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/vies/member.html',
        controller: 'SkillsMemberCController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}