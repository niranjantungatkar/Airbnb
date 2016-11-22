/**
 * Created by Shruti Loya on 11/17/2016.
 */
/**
 * Created by Shruti Loya on 11/17/2016.
 */

airbnbApp.controller('controllerBecomeHost',function($scope,$state,$log,$http,$state){


    $scope.firststepdet = $state.params.firstStep;
    $scope.secondstep = $state.params.secondstep;

  if($scope.firststepdet == null && $scope.secondstep == null)
    {
        $scope.step1 = true;
        $scope.step2 = false;
        $scope.step3 = false;
    }
    else if($scope.firststepdet != null && $scope.secondstep == null)
    {
        $scope.step1 = false;
        $scope.step2 = true;
        $scope.step3 = false;
    }
    else if($scope.firststepdet == null && $scope.secondstep != null)
    {
        $scope.step1 = false;
        $scope.step2 = false;
        $scope.step3 = true;
    }


    $scope.startHosting1 = function () {
        $state.go('home.becomeHostStep1');
    };


    $scope.startHosting2 = function () {

        $state.go('home.becomeHostStep2',{firstStep : $scope.firststepdet});
    };
    

    
    $scope.startHosting3 = function () {
        $state.go('home.becomeHostStep3',{secondstep : $scope.secondstep});
    };

/*
    $scope.becomeHostDesc = function () {
        $state.go('home.becomeHostDesc');
    };


    $scope.becomeHostDates = function () {
        $state.go('home.becomeHostDates');
    };*/


})
